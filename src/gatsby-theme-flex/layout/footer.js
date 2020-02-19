/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import PropTypes from "prop-types"
import Image from "gatsby-theme-flex/src/components/image"

const Footer = ({ copyright }) => {
  return (
    <footer style={{background: "#F8F8F8"}}>
      <Container>
        <Flex
          sx={{
            py: [4, 6],
            flexDirection: [`column-reverse`, `row`],
            justifyContent: `space-between`,
            alignItems: [`center`],
          }}
        >
          <Image
            src={`logo-black.png`}
            style={{
              width: `104px`,
            }}
          />
        </Flex>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string,
}

export default Footer
