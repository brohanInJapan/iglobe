import { useEffect, useRef, useState } from "react";
import { debounce } from "debounce";

import { Header, Nav, SubMenu } from "./Header";

import Logo from "./assets/Logo";
import BentleyLogo from "./assets/BentleyLogo";
import ThemeIcon from "./assets/ThemeIcon";
import IconawesomeFacebookSquare from "./assets/IconawesomeFacebookSquare";
import IconawesomeLinkedin from "./assets/IconawesomeLinkedin";
import IconawesomeTwitterSquare from "./assets/IconawesomeTwitterSquare";
import IconawesomeYoutube from "./assets/IconawesomeYoutube";
import IconawesomeInstagram from "./assets/IconsimpleInstagram";

import Spline from "@splinetool/react-spline";

function App() {
  const [isDarkMode, setIsDarkmode] = useState(function () {
    const storedValue = localStorage.getItem("isDarkmode");

    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      return false;
    }
  });

  function handleDarkModeToggle() {
    setIsDarkmode(!isDarkMode);
    localStorage.setItem("isDarkmode", JSON.stringify(!isDarkMode));
  }

  useEffect(() => {
    if (isDarkMode === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const browseRef = useRef(null);

  function toggleBrowse() {
    setIsBrowseOpen(!isBrowseOpen);
  }

  const handleBrowseOnMouseLeave = debounce(() => {
    setIsBrowseOpen(false);
    browseRef.current.blur();
  }, 450);

  const handleBrowseOnMouseEnter = () => {
    setIsBrowseOpen(true);
    handleBrowseOnMouseLeave.clear();
  };

  useEffect(() => {
    isBrowseOpen
      ? (browseRef.current.className = "nav-item open")
      : (browseRef.current.className = "nav-item");
  }, [isBrowseOpen]);

  return (
    <>
      <div>
        <Spline
          className="background"
          scene="https://prod.spline.design/3-XSwU5saGtSCBA9/scene.splinecode"
        />
      </div>
      <Header>
        <Logo />
        <Nav onToggleBrowse={toggleBrowse} browseRef={browseRef} />
        <BentleyLogo />
        <ThemeIcon onClick={handleDarkModeToggle} />

        {isBrowseOpen ? (
          <SubMenu
            onMouseLeave={handleBrowseOnMouseLeave}
            onMouseEnter={handleBrowseOnMouseEnter}
          ></SubMenu>
        ) : (
          <></>
        )}
      </Header>

      <div className="inner-grid">
        <Main>
          <Hero></Hero>
          <TestSection>
            <Spline scene="https://prod.spline.design/rym97Oa0xiRhp8U8/scene.splinecode" />
          </TestSection>
          <Hero></Hero>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          reiciendis tempore, dicta non nesciunt maxime, esse dolore aspernatur
          animi assumenda autem aut, fuga asperiores quam totam rerum laboriosam
          impedit nostrum. Expedita quam, optio delectus accusamus dolores
          beatae voluptatum consequuntur repudiandae impedit, sed qui nobis
          animi dolorum unde excepturi ducimus sint! Iste a rerum perferendis,
          cum eos amet corporis quae at quisquam quas soluta repellat aspernatur
          qui! Magnam provident velit modi optio, veniam maxime eius, dicta,
          odit ad voluptatum pariatur non eveniet possimus ducimus? Impedit
          sapiente ut repellendus in quis voluptates assumenda qui neque quia
          maiores eligendi minus corrupti autem quos ullam repudiandae facilis,
          reprehenderit atque perspiciatis. Odit rerum, ducimus sapiente
          corporis nesciunt pariatur optio, alias quas veritatis, quam
          voluptates minima quidem exercitationem at quia magni dolores. Eaque
          voluptas officiis odit, quia, iste, dolor aut distinctio cumque
          aspernatur in adipisci mollitia debitis animi asperiores alias? Libero
          corporis veniam eius nemo. Reprehenderit laudantium nam obcaecati,
          facilis illo eius rem facere minima ea deleniti deserunt saepe tempora
          expedita fugit repellendus doloremque neque autem aperiam molestias
          officia. Sapiente fuga vel vitae, deserunt vero similique ab
          voluptates non cupiditate officia nesciunt facilis accusamus aperiam
          eaque cumque ut, ipsum perferendis. Eius doloribus quis aliquid
          laborum recusandae laudantium! Unde reiciendis accusamus natus animi
          voluptas exercitationem placeat tempore officiis voluptate
          perferendis, accusantium quaerat a ut numquam quidem, obcaecati ullam
          voluptatem rerum aperiam deleniti sunt excepturi, eos adipisci.
          Doloremque quas aspernatur quibusdam atque ad. Mollitia harum placeat
          reprehenderit quae dolore ipsam, sapiente quis distinctio quos
          perferendis illum aliquid. Laborum, dignissimos quis quo asperiores
          eaque qui, labore doloribus id enim facilis, ullam iste non nostrum
          eos a impedit eum rerum? Atque recusandae quae natus quod expedita
          similique quibusdam dolor ex eius aperiam non nobis impedit
          consequuntur ab ut, qui dignissimos sed ratione, sint perferendis? Ea
          velit nulla perspiciatis magni tenetur cum ad minus tempore
          consequatur voluptatibus aliquid commodi reprehenderit eaque
          voluptates iure quibusdam deserunt, quasi beatae ipsa fugiat.
          Provident eaque, fuga nemo nihil ipsam architecto illo quidem modi
          deleniti vero harum maiores reprehenderit minima, error quia sunt.
          Harum molestiae quibusdam necessitatibus voluptates voluptas unde
          reiciendis, magni minima deserunt consequatur. Vel, et labore nesciunt
          nihil ab dolore dignissimos dicta quia libero asperiores soluta sit
          accusamus dolores odit exercitationem enim voluptate aliquam hic
          debitis sint. In labore id laborum ex fuga libero hic dolorum,
          obcaecati cum soluta! Iusto accusantium incidunt dolor, hic sunt,
          debitis, repudiandae illo ipsum minus deserunt facere ducimus officiis
          optio? Quaerat cumque dolorem doloribus? Fuga corporis laborum
          voluptatibus aperiam molestias cupiditate obcaecati repellat
          excepturi, necessitatibus illo, dignissimos fugit dolorum? Corrupti
          amet animi voluptatem numquam sunt quod maiores fuga iure magni,
          labore cumque quasi voluptate aliquid illo nesciunt. Veniam vero illum
          dicta natus ab earum ipsam atque mollitia distinctio aliquam voluptas
          deserunt eos labore, consequuntur aut cupiditate fugiat sapiente
          quaerat dolorum, magni amet veritatis cumque, obcaecati esse. Adipisci
          recusandae at nobis mollitia dicta cupiditate. Reiciendis sapiente
          laboriosam optio quae eius nisi, deserunt, suscipit harum odit
          molestias modi possimus magni temporibus quos, ex sed illo unde
          consequuntur quod doloremque? Accusamus, dolorum harum. Aliquam,
          exercitationem iusto accusantium est laboriosam similique inventore
          blanditiis. Ullam iste minima reiciendis ipsa, vel doloremque nam sed
          excepturi autem quos tenetur voluptatibus expedita atque voluptate
          facilis repellendus dolores quia qui optio. Eos facere, temporibus
          reiciendis ullam quis consequatur dolorem, nisi iusto distinctio
          libero unde nesciunt? Adipisci doloribus quas temporibus amet,
          mollitia sunt ullam provident sapiente autem, quaerat modi porro
          repellat. Soluta dolorum maiores tempora modi reprehenderit et, sequi
          esse possimus accusantium quod quam accusamus vitae cum dolor at
          voluptas ducimus blanditiis necessitatibus nostrum atque veritatis?
          Quod aliquid, mollitia quas, quidem odio maiores, tenetur ipsam
          quibusdam molestias ratione expedita doloremque! Beatae explicabo
          temporibus fugit provident laborum quisquam sequi delectus eum ipsam
          blanditiis nisi repellat minus aperiam nulla, iure ea eos optio
          nesciunt eius voluptates quidem molestias sit debitis! Minus
          praesentium debitis aperiam recusandae sed aliquam pariatur possimus.
          Enim alias in corrupti molestiae ipsam soluta eaque ad libero quia
          illo veritatis veniam assumenda perferendis recusandae, expedita
          facere quos sint dolorem sit ratione commodi culpa. Veritatis, placeat
          eos rem fuga illum est mollitia accusantium voluptatum ratione
          doloribus rerum maiores nihil suscipit non amet eius quos minima!
          Error expedita doloribus officiis impedit maxime ut alias natus
          voluptatem. Debitis sunt officia exercitationem reprehenderit
          quibusdam aut tempora corrupti! Quo asperiores repudiandae quam vel
          beatae sequi amet corporis fugit illo ipsa porro reprehenderit
          placeat, esse quos incidunt harum quidem aliquid pariatur natus itaque
          doloremque officiis libero odit consequatur. Culpa temporibus,
          voluptate est, dolorum ipsam iste mollitia itaque beatae, dolore
          repellat possimus alias tempora numquam repudiandae debitis ex
          blanditiis. Necessitatibus minus fugiat similique repellendus laborum
          saepe eveniet, vero in ipsa dolorum ad hic. Possimus, repellat.
          Quisquam quas accusamus, ea sunt quos aliquid esse voluptas cupiditate
          obcaecati iusto quo recusandae dolore eos veniam possimus. Ipsam
          labore quaerat et voluptatibus voluptates asperiores tenetur
          voluptatem tempora, neque dolorum commodi veniam inventore! Nisi, vel.
          Voluptatum veniam similique nihil molestias explicabo reiciendis
          laudantium rem inventore cupiditate, delectus unde sed libero
          exercitationem officia fugiat deleniti id aliquid, soluta doloremque
          alias ipsum! Repellendus iste repudiandae quae ab fuga alias labore,
          pariatur illo nisi veniam ratione officiis hic aliquam quidem
          consequuntur unde, voluptatibus minima corrupti architecto blanditiis,
          facilis soluta perspiciatis doloribus quas. Ducimus non eum nisi vel
          ullam explicabo dolore, recusandae, id, amet assumenda earum
          excepturi! Dicta quisquam illum, laborum veritatis aut, accusantium
          facilis est reiciendis sapiente exercitationem quod. Sunt consequatur,
          alias, beatae ipsum possimus velit animi tenetur, non perspiciatis
          omnis laboriosam? Harum distinctio asperiores eum ipsam, nulla
          quisquam obcaecati ipsum, quasi porro quam error rem? Error optio ex
          consectetur ea recusandae sed, cumque magni, magnam explicabo eos
          dicta saepe nemo vitae animi minima est nulla? Excepturi dolores
          cumque est perspiciatis praesentium ullam, earum fugiat, laudantium
          nesciunt quae, nihil ratione dolorem mollitia eveniet facilis.
          Nesciunt repellendus tempore necessitatibus maxime officiis doloribus
          dicta ut assumenda velit aut quisquam laudantium exercitationem a sunt
          voluptas perspiciatis et magni, eaque nostrum, id dolor qui
          repudiandae facere corporis. Quibusdam, autem ipsa fugiat libero
          dignissimos eveniet deserunt saepe dolores doloremque odit non quidem
          numquam nostrum quia, illum labore, excepturi blanditiis?
        </Main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;

function Main({ children }) {
  return <main className="container">{children}</main>;
}

function Hero({ children }) {
  return (
    <>
      <div className="hero">
        <div className="left">
          <h1>Transform your business with the Power of Data.</h1>
          <button className="btn" href="#">
            BOOK A CONSULTATION
          </button>
        </div>

        <div className="right">
          <IconawesomeLinkedin />
          <IconawesomeFacebookSquare />
          <IconawesomeTwitterSquare />
          <IconawesomeInstagram />
          <IconawesomeYoutube />
        </div>

        {children}
      </div>
    </>
  );
}

function TestSection({ children }) {
  return <div className="testAnim">{children}</div>;
}
