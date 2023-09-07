import React from 'react'
import { QueryMarkdownText } from '../../api/data/markdownQuery';
import APILinks from '../../api/data/apiLinks';
import Markdown from '../projects/articles/markdownParser';
import WindowWrap from '../../layout/components/window/windowWrap';
import { Box, Typography } from '@mui/material';
import { T, Polish } from '../../localization/T';
import ForeignLanguageAlert from '../../style/foreignLanguageAlert';

const Accomplishments = () => {
  const { isLoading, isError, data, error, refetch } = QueryMarkdownText({ queryUrl: APILinks.fetchAccopmlishments });
  return (
    <div>
      {!Polish() && <ForeignLanguageAlert TKey="alert.translationpending" />}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      <WindowWrap name={T("accomplishments")} maxWidth="lg">
        <Typography sx={{ textAlign: "center", padding: "20px" }} variant="h3">{T("accomplishments")}</Typography>
        <Box sx={{ padding: "10px" }}>
          <Markdown>{data}</Markdown>
        </Box>
      </WindowWrap>
    </div>
  )

}

export default Accomplishments