/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from "gatsby-theme-flex/src/components/image"

const Branding = ({ style, name, logo }) => (
  <Link
    to="/"
    sx={{
      variant: `text.branding`,
      display: `flex`,
      alignItems: `center`,
      ...style,
    }}
  >
    <Image
      src={logo}
      alt={name}
      style={{
        width: `104px`,
        mr: 2,
      }}
    />
  </Link>
)

Branding.propTypes = {
  style: PropTypes.object,
  logo: PropTypes.string,
  name: PropTypes.string,
}

export default Branding
