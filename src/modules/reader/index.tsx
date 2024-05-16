import { Box } from "@chakra-ui/react";
import axios from "axios";
import type { NavItem, Rendition } from "epubjs";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { ReactReader } from "react-reader";

const Reader = () => {
  const [location, setLocation] = useState<string | number>(0);
  const [fontSize, setFontSIze] = useState<string>("17px");
  const [epubData, setEpubData] = useState<ArrayBuffer | null>(null);
  const router = useRouter();
  const [largeText, setLargeText] = useState(false);
  const rendition = useRef<Rendition | undefined>(undefined);
  const toc = useRef<NavItem[]>([]);

  useEffect(() => {}, [largeText]);

  const handleSetFontSize = (newFontSize: string) => {
    setFontSIze(newFontSize); // Update font size state
  };

  useEffect(() => {
    const fontSizeFromQuery = router.query.fontSize;
    handleSetFontSize(fontSizeFromQuery as string);
    rendition.current?.themes.fontSize(fontSize);
    console.log(fontSizeFromQuery);
  }, [router.query.fontSize]);

  useEffect(() => {
    const locations = router.query.location;
    if (locations !== "-") {
      setLocation(locations as string);
    }
  }, [router.query.location]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    fetchData();
  }, [router.query.id, router.query.fontSize]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${router.query.baseurl}/master/v1/readings/read/${router.query.id}/stream`, {
        responseType: "arraybuffer",
        headers: {
          Authorization: `Bearer ${router.query.token}`,
        },
      });
      setEpubData(response.data);
    } catch (error) {
      console.error("Error fetching EPUB:", error);
    }
  };

  return (
    <Box style={{ height: "100vh" }}>
      <>
        {epubData && (
          <>
            <ReactReader
              url={epubData}
              location={location}
              getRendition={(_rendition: Rendition) => {
                rendition.current = _rendition;
                rendition.current.themes.fontSize(fontSize);
              }}
              locationChanged={(epubcfi: string) => {
                setLocation(epubcfi);
                console.log(`location:${epubcfi}`);
                console.log(fontSize);
                if (rendition.current && toc.current) {
                  const { displayed, href } = rendition.current.location.start;
                  const chapter = toc.current.find(item => item.href === href);
                  console.log(`current_page:${displayed.page}`);
                  console.log(`total_page:${displayed.total}`);
                }
              }}
            />
          </>
        )}
      </>
    </Box>
  );
};

export default Reader;
