import { Container } from "styles/";
import { NextPage } from "next";
import { styled } from "../../stitches.config";

const Text = styled("p", {
  color: "$primaryText",
  margin: "16px 0",
});

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
});

const Hyperlink = styled("a", {
  textDecoration: "none",
  color: "$coloredLink",
  margin: "16px 0",
});

const About: NextPage = () => {
  const metastem = "https://metastem.su";
  const twitter = "https://twitter.com/JokingRajat";
  return (
    <Container>
      <Text>Hope you like this version of Hacker News!</Text>
      <Section>
        <Text>
          Powered by{" "}
          <Hyperlink href={metastem} target="_blank" rel="noopener noreferrer">
            Metastem
          </Hyperlink>
        </Text>
      </Section>
    </Container>
  );
};

export default About;
