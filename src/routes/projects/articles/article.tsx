import APILinks from "../../../api/data/apiLinks";
import { QueryMarkdownText } from "../../../api/data/markdownQuery";
import ForeignLanguageAlert from "../../../style/foreignLanguageAlert";
import { Box } from "@mui/material";
import Markdown from "./markdownParser";
import WindowWrap from "../../../layout/components/window/windowWrap";
import T, { Polish } from "../../../localization/T";
import LoadingBackdrop from "../../../style/loadingBackdrop";

type Props = {
  url: string;
};

const Article = ({ url }: Props) => {
  const { isLoading, data } = QueryMarkdownText({
    queryUrl: APILinks.fetchArticle + url,
  });

  return (
    <div>
      {!Polish() && <ForeignLanguageAlert TKey="alert.translationpending" />}
      <LoadingBackdrop open={isLoading} />
      {data && (
        <WindowWrap name={T("toolbar.articles")} maxWidth="lg">
          <Box sx={{ padding: "10px", background: "rgba(0,0,0,0.7)" }}>
            <div style={{ textAlign: "justify" }}>
              <Markdown className="markdown" key={data.substring(0, 40)}>
                {data}
              </Markdown>
            </div>
          </Box>
        </WindowWrap>
      )}
    </div>
  );
};

export default Article;
