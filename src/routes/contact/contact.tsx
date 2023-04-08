import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Divider, ListItemButton, Typography } from '@mui/material';
import T from '../../localization/T';
import WindowWrap from '../../layout/components/window/windowWrap';
import PanelStyledLink from '../../style/panelStyledLink';

const contact = [
  {
    name: 'GitHub Rafist0',
    link: 'https://github.com/Rafisto',
    icon: <GitHubIcon />
  },
  {
    name: 'LinkedIn Rafał Włodarczyk',
    link: 'https://www.linkedin.com/in/rafal-wlodarczyk/',
    icon: <LinkedInIcon />
  },
  {
    name: 'Youtube Admin1',
    link: 'https://www.youtube.com/channel/UCKfsZesQpYanHjMU5yNcDNA',
    icon: <YouTubeIcon />
  },
  {
    name: 'Instagram @rafist0',
    link: 'https://www.instagram.com/rafist0/',
    icon: <InstagramIcon />
  },
  {
    name: 'Email',
    link: 'mailto:1.rafal.wlodarczyk@gmail.com',
    icon: <EmailIcon />
  }
]

interface ContactItem {
  name: string;
  link: string;
  icon: JSX.Element;
}

const Contact = () => {
  return (
    <Box className="bmain">
      <WindowWrap name={T("toolbar.contact")}>
        <Box sx={{ padding: "20px" }}>
          <Typography style={{ textAlign: "center" }} variant="h4">{T("toolbar.contact")}</Typography>
          <Divider sx={{ marginBlock: "20px" }} />
          <div style={{ display: "flex" }}>
            {contact.map((item: ContactItem, index: number) => (
              <PanelStyledLink key={index} name={item.name} link={item.link} icon={item.icon} />
            ))}
          </div>
        </Box>
      </WindowWrap>
    </Box>
  )
}

export default Contact