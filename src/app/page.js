import Header from "@/components/Header";
import Content from "@/components/Content";
import { Container } from '@mui/material';



export default function Home() {
  return (
    <>
     <Container maxWidth="lg" disableGutters>
      <Header />
      <Content />
    </Container>
    </>
  );
}
