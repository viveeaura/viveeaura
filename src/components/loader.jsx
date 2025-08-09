const Logo = '/icons/favicon-310x310.png'

export default function Loader() {
  return (
    <div className="loader-container ">
      <img src={Logo} alt="Logo" width={100} height={100} className="logo" />
        <div className="loader-mask"></div>
    </div>
  )
}