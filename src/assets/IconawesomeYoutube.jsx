const IconawesomeYoutube = ({ fill = "var(--clr-secondary-200)" }) => {
  return (
    <a href="https://www.youtube.com/@iGlobeGroup">
      <button className="nav-item">
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Icon_awesome-youtube"
            d="M25.459,7.629a3.564,3.564,0,0,0-2.5-2.531,37.252,37.252,0,0,0-6.908-.6,37.252,37.252,0,0,0-6.908.6,3.564,3.564,0,0,0-2.5,2.531A37.7,37.7,0,0,0,6.05,14.52a37.7,37.7,0,0,0,.591,6.891,3.511,3.511,0,0,0,2.5,2.491,37.252,37.252,0,0,0,6.908.6,37.252,37.252,0,0,0,6.908-.6,3.511,3.511,0,0,0,2.5-2.491,37.7,37.7,0,0,0,.591-6.891,37.7,37.7,0,0,0-.591-6.891Zm-12.3,11.12V10.291L20.55,14.52,13.157,18.75Z"
            fill={fill}
            transform="translate(-6.05 -4.5)"
            data-name="Icon awesome-youtube"
          />
        </svg>
      </button>
    </a>
  );
};

export default IconawesomeYoutube;
