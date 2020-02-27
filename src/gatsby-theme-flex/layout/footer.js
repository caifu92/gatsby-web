/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import PropTypes from "prop-types"
import Image from "gatsby-theme-flex/src/components/image"
import Link from "gatsby-theme-flex/src/components/link"

const Footer = ({ copyright }) => {
  return (
    <footer style={{background: "#F8F8F8", height: "325px"}}>
      <Container>
        <Flex
          sx={{
            py: [4, 6],
            flexDirection: [`column`, `row`],
            justifyContent: `space-between`,
            alignItems: [`center`],
          }}
        >
          <Image src={`logo-black.png`} style={{ width: `175px` }}/>
          <Link to="https://onovolab.com/">
            <Image src={`onovolab.png`} style={{ width: `80px`, padding: `1em` }}/>
          </Link>
          <Link to="https://www.facebook.com/StoqBR/">
            <Image src={`facebook.png`} style={{ width: `80px`, padding: `1em` }}/>
          </Link>
          <Link to="https://www.instagram.com/stoqbr/">
            <Image src={`instagram.png`} style={{ width: `80px`, padding: `1em` }}/>
          </Link>
          <Link to="https://www.linkedin.com/company/stoq-tecnologia-ltda">
            <Image src={`linkedin.png`} style={{ width: `80px`, padding: `1em` }}/>
          </Link>

          <p><small>Rua José Bonifácio, 565, sala 27<br/>
             Núcleo Residencial Silvio Vilari<br/>
             São Carlos - SP CEP 13560-610</small></p>
        </Flex>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string,
}

export default Footer
