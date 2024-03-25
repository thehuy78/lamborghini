import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../../styles/Menubar.scss";
import "../../styles/Navbarmobile.scss";
import "../../styles/Responsive.scss";
import { Link } from "react-router-dom";
import huracan_evo_spyder from "../../assets/image/huracan-evo-spyder/background.png";
import huracan_tecnica from "../../assets/image/huracan-tecnica/background.png";
import huracan_sterrato from "../../assets/image/huracan-sterrato/background.png";
import huracan_sto from "../../assets/image/huracan-sto/background.png";
import urus_PERFORMANTE from "../../assets/image/urus-performante/background.png";
import urus_s from "../../assets/image/urus-s/background.png";
import concept_asterion from "../../assets/image/concept-asterion/background.png";
import concept_estoque from "../../assets/image/concept-estoque/background.png";
import concept_terzo from "../../assets/image/concept-terzo/background.png";
import limited_fkp from "../../assets/image/limited-fkp/background.png";
import limited_lpi from "../../assets/image/limited-lpi/background.png";
import limited_roadster from "../../assets/image/limited-roadster/background.png";

class Menubar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityConcept: false,
      opacityTransformConcept: false,
      opacityConcept: false,
      MODLESCONCEPTHidden: "MODLES-CONCEPT",

      visibilityLimited: false,
      opacityTransformLimited: false,
      opacityLimited: false,
      LIMITEDOPACITY: "LIMITED-SPEED-ELEMENT-content",
      MODLESLIMITEDHidden: "MODLES-LIMITED",

      visibilityURUS: false,
      opacityTransformURUS: false,
      opacityURUS: false,
      URUSOPACITY: "URUS-SPEED-ELEMENT-content",
      MODLESURUSHidden: "MODLES-URUS",

      visibilityHURACAN: false,
      opacityTransformHURACAN: false,
      opacityHURACAN: false,
      HURACANOPACITY: "HURACÁN-SPEED-ELEMENT-content",
      MODLESHURACANHidden: "MODLES-HURACÁN",

      opacityREVUELTO: false,
      opacityTransformREVUELTO: false,
      REVUELTOOPACITY: "SPEED-ELEMENT-content",
      MODLESREVUELTOHidden: "MODELS_element-REVUELTO",

      OWNERSHIPelement: "OWNERSHIP_element",
      MOTOSPORTelement: "MOTOSPORT_element",

      addclass: "MODELS",
      addclass1: false,
      addclass2: false,

      //mobile
      menu_mobile_lv2_content: false,
      MOTOSPORT_mobile_lv2_content_detail: false,
      OWNERSHIP_mobile_lv2_content_detail: false,
      MODELS_mobile_lv2_content_detail: false,

      HURACAN_mobile_height: false,
      LIMITED_mobile_height: false,
      URUS_mobile_height: false,
      CONCEPT_mobile_height: false,

      isURUSMobileHeightActive: false,
      isHURACANMobileHeightActive: false,
      isCONCEPTMobileHeightActive: false,
      isLIMITEDMobileHeightActive: false,

      menu_mobile_lv2: false,
      list_mobile_down: false,
      list_mobile_up: false,

      visibility: true,
    };

    // KHU VUC LAY CLASS DE LAM VIEC.......
  }

  concept_terzo = () => {
    var CONCEPT_information_content_SPAN = document.querySelector(
      ".CONCEPT-information-content > span"
    );
    var CONCEPT_GALLERY_SPAN = document.querySelector(
      ".CONCEPT-GALLERY-ELEMENT > span"
    );
    CONCEPT_information_content_SPAN.innerHTML =
      "TERZO MILLENNIO <p>MODEL INFORMATION</p>";
    CONCEPT_GALLERY_SPAN.innerHTML = "VIEW<p>FULL GALLERY</p>";
    console.log("a");
  };
  //end

  // ham lay thong tin concept_asterion
  concept_asterion = () => {
    var CONCEPT_information_content_SPAN = document.querySelector(
      ".CONCEPT-information-content > span"
    );
    var CONCEPT_GALLERY_SPAN = document.querySelector(
      ".CONCEPT-GALLERY-ELEMENT > span"
    );
    CONCEPT_information_content_SPAN.innerHTML =
      "ASTERION <p>MODEL INFORMATION</p>";
    CONCEPT_GALLERY_SPAN.innerHTML = "VIEW<p>FULL GALLERY</p>";
  };

  //end

  // ham lay thong tin concept_estoque
  concept_estoque = () => {
    var CONCEPT_information_content_SPAN = document.querySelector(
      ".CONCEPT-information-content > span"
    );
    var CONCEPT_GALLERY_SPAN = document.querySelector(
      ".CONCEPT-GALLERY-ELEMENT > span"
    );
    CONCEPT_information_content_SPAN.innerHTML =
      "ESTOQUE <p>MODEL INFORMATION</p>";
    CONCEPT_GALLERY_SPAN.innerHTML = "VIEW<p>FULL GALLERY</p>";
  };
  //end

  // ham lay thong tin limited_lpi

  limited_lpi = () => {
    var LIMITED_SPEED_ELEMENT_content_SPAN = document.querySelector(
      ".LIMITED-SPEED > .LIMITED-SPEED-ELEMENT-content > span"
    );
    var LIMITED_SPEED_ELEMENT_num_content_SPAN = document.querySelector(
      ".LIMITED-SPEED-num > .LIMITED-SPEED-ELEMENT-content > span"
    );
    var LIMITED_information_content_SPAN = document.querySelector(
      ".LIMITED-information-content > span"
    );
    var LIMITED_SPEED_power_SPAN = document.querySelector(
      ".LIMITED-SPEED-power > .LIMITED-SPEED-ELEMENT-content > span"
    );
    const fuel_infor_LIMITED_conten = document.querySelector(
      ".fuel_infor-LIMITED-conten"
    );

    LIMITED_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>355KM/H</p>";
    LIMITED_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>2.8S</p>";
    LIMITED_information_content_SPAN.innerHTML =
      "COUNTACH LPI 800-4 <p>MODEL INFORMATION</p>";
    LIMITED_SPEED_power_SPAN.innerHTML =
      "POWER(CV)/POWER(KM) <p>814CV/599KM</p>";
    fuel_infor_LIMITED_conten.innerHTML =
      "Fuel consumption and emission values of Countach LPI 800-4*; Fuel consumption combined: 19,5 l/100km (WLTP); CO2-emissions combined: 440 g/km (WLTP)";
  };

  //end

  // ham lay thong tin limited_fkp

  limited_fkp = () => {
    var LIMITED_SPEED_ELEMENT_content_SPAN = document.querySelector(
      ".LIMITED-SPEED > .LIMITED-SPEED-ELEMENT-content > span"
    );
    var LIMITED_SPEED_ELEMENT_num_content_SPAN = document.querySelector(
      ".LIMITED-SPEED-num > .LIMITED-SPEED-ELEMENT-content > span"
    );
    var LIMITED_information_content_SPAN = document.querySelector(
      ".LIMITED-information-content > span"
    );
    var LIMITED_SPEED_power_SPAN = document.querySelector(
      ".LIMITED-SPEED-power > .LIMITED-SPEED-ELEMENT-content > span"
    );
    const fuel_infor_LIMITED_conten = document.querySelector(
      ".fuel_infor-LIMITED-conten"
    );

    LIMITED_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>>350KM/H</p>";
    LIMITED_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>2.8S</p>";
    LIMITED_information_content_SPAN.innerHTML =
      "SIÁN FKP 37 <p>MODEL INFORMATION</p>";
    LIMITED_SPEED_power_SPAN.innerHTML =
      "POWER(CV)/POWER(KM) <p>819CV/602KM</p>";
    fuel_infor_LIMITED_conten.innerHTML =
      "Fuel consumption and emission values of Sián*; Fuel consumption combined: 19,2 l/100km (WLTP); CO2-emissions combined: 447 g/km (WLTP)";
  };

  //end

  // ham lay thong tin limited_fkp

  limited_roadster = () => {
    var LIMITED_SPEED_ELEMENT_content_SPAN = document.querySelector(
      ".LIMITED-SPEED > .LIMITED-SPEED-ELEMENT-content > span"
    );
    var LIMITED_SPEED_ELEMENT_num_content_SPAN = document.querySelector(
      ".LIMITED-SPEED-num > .LIMITED-SPEED-ELEMENT-content > span"
    );
    var LIMITED_information_content_SPAN = document.querySelector(
      ".LIMITED-information-content > span"
    );
    var LIMITED_SPEED_power_SPAN = document.querySelector(
      ".LIMITED-SPEED-power > .LIMITED-SPEED-ELEMENT-content > span"
    );
    const fuel_infor_LIMITED_conten = document.querySelector(
      ".fuel_infor-LIMITED-conten"
    );

    LIMITED_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>>350KM/H</p>";
    LIMITED_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>2.9S</p>";
    LIMITED_information_content_SPAN.innerHTML =
      "SIÁN ROADSTER <p>MODEL INFORMATION</p>";
    LIMITED_SPEED_power_SPAN.innerHTML =
      "POWER(CV)/POWER(KM) <p>819CV/602KM</p>";
    fuel_infor_LIMITED_conten.innerHTML =
      "Fuel consumption and emission values of Sián roadster*; Fuel consumption combined: 18,5 l/100km (WLTP); CO2-emissions combined: 447 g/km (WLTP)";
  };

  //end

  // ham lay thong tin huracan sterrato

  huracan_sterrato = () => {
    var HURACÁN_START_ELEMENT_content_SPAN = document.querySelector(
      ".HURACÁN-content-START-ELEMENT > a > span"
    );
    var HURACÁN_SPEED_ELEMENT_content_SPAN = document.querySelector(
      ".HURACÁN-SPEED > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var HURACÁN_SPEED_ELEMENT_num_content_SPAN = document.querySelector(
      ".HURACÁN-SPEED-num > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var HURACÁN_information_content_SPAN = document.querySelector(
      ".HURACÁN-information-content > span"
    );
    var HURACÁN_SPEED_power_SPAN = document.querySelector(
      ".HURACÁN-SPEED-power > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var fuel_infor_hurucan_conten = document.querySelector(
      ".fuel_infor-hurucan-conten"
    );

    HURACÁN_START_ELEMENT_content_SPAN.textContent =
      "CREATE YOUR HURACÁN START CONFIGURATION";
    HURACÁN_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>260KM/H</p>";
    HURACÁN_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.4S</p>";
    HURACÁN_information_content_SPAN.innerHTML =
      "HURACÁN STERRATO <p>MODEL INFORMATION</p>";
    HURACÁN_SPEED_power_SPAN.innerHTML =
      "POWER(CV)/POWER(KM) <p>610CV/449KM</p>";
    fuel_infor_hurucan_conten.innerHTML =
      "Fuel consumption and emission values of Huracán Sterrato*; Fuel consumption combined: 14,9 l/100km (WLTP); CO2-emissions combined: 337 g/km (WLTP)";
  };
  //end

  // ham lay thong tin huracan_tecnica
  huracan_tecnica = () => {
    var HURACÁN_START_ELEMENT_content_SPAN = document.querySelector(
      ".HURACÁN-content-START-ELEMENT > a > span"
    );
    var HURACÁN_SPEED_ELEMENT_content_SPAN = document.querySelector(
      ".HURACÁN-SPEED > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var HURACÁN_SPEED_ELEMENT_num_content_SPAN = document.querySelector(
      ".HURACÁN-SPEED-num > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var HURACÁN_information_content_SPAN = document.querySelector(
      ".HURACÁN-information-content > span"
    );
    var HURACÁN_SPEED_power_SPAN = document.querySelector(
      ".HURACÁN-SPEED-power > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var fuel_infor_hurucan_conten = document.querySelector(
      ".fuel_infor-hurucan-conten"
    );

    HURACÁN_START_ELEMENT_content_SPAN.textContent =
      "CREATE YOUR HURACÁN START CONFIGURATION";
    HURACÁN_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>325KM/H</p>";
    HURACÁN_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.2S</p>";
    HURACÁN_information_content_SPAN.innerHTML =
      "HURACÁN TECNICA <p>MODEL INFORMATION</p>";
    HURACÁN_SPEED_power_SPAN.innerHTML =
      "POWER(CV)/POWER(KM) <p>640CV/470KM</p>";
    fuel_infor_hurucan_conten.innerHTML =
      "Fuel consumption and emission values of Huracán Tecnica*; Fuel consumption combined: 14,5 l/100km (WLTP); CO2-emissions combined: 328 g/km (WLTP)";
  };
  // end

  // ham lay thong tin huracan_sto
  huracan_sto = () => {
    var HURACÁN_START_ELEMENT_content_SPAN = document.querySelector(
      ".HURACÁN-content-START-ELEMENT > a > span"
    );
    var HURACÁN_SPEED_ELEMENT_content_SPAN = document.querySelector(
      ".HURACÁN-SPEED > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var HURACÁN_SPEED_ELEMENT_num_content_SPAN = document.querySelector(
      ".HURACÁN-SPEED-num > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var HURACÁN_information_content_SPAN = document.querySelector(
      ".HURACÁN-information-content > span"
    );
    var HURACÁN_SPEED_power_SPAN = document.querySelector(
      ".HURACÁN-SPEED-power > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var fuel_infor_hurucan_conten = document.querySelector(
      ".fuel_infor-hurucan-conten"
    );

    HURACÁN_START_ELEMENT_content_SPAN.textContent =
      "CREATE YOUR HURACÁN START CONFIGURATION";
    HURACÁN_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>310KM/H</p>";
    HURACÁN_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.0S</p>";
    HURACÁN_information_content_SPAN.innerHTML =
      "HURACÁN STO <p>MODEL INFORMATION</p>";
    HURACÁN_SPEED_power_SPAN.innerHTML =
      "POWER(CV)/POWER(KM) <p>640CV/470KM</p>";
    fuel_infor_hurucan_conten.innerHTML =
      "Fuel consumption and emission values of Huracán STO*; Fuel consumption combined: 13,9 l/100km (WLTP); CO2-emissions combined: 331 g/km (WLTP)";
  };
  //END

  // ham lay thong tin huracan_evo_spyder
  huracan_evo_spyder = () => {
    var HURACÁN_START_ELEMENT_content_SPAN = document.querySelector(
      ".HURACÁN-content-START-ELEMENT > a > span"
    );
    var HURACÁN_SPEED_ELEMENT_content_SPAN = document.querySelector(
      ".HURACÁN-SPEED > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var HURACÁN_SPEED_ELEMENT_num_content_SPAN = document.querySelector(
      ".HURACÁN-SPEED-num > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var HURACÁN_information_content_SPAN = document.querySelector(
      ".HURACÁN-information-content > span"
    );
    var HURACÁN_SPEED_power_SPAN = document.querySelector(
      ".HURACÁN-SPEED-power > .HURACÁN-SPEED-ELEMENT-content > span"
    );
    var fuel_infor_hurucan_conten = document.querySelector(
      ".fuel_infor-hurucan-conten"
    );

    HURACÁN_START_ELEMENT_content_SPAN.textContent =
      "CREATE YOUR HURACÁN START CONFIGURATION";
    HURACÁN_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>325KM/H</p>";
    HURACÁN_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.1S</p>";
    HURACÁN_information_content_SPAN.innerHTML =
      "HURACÁN EVO SPYDER <p>MODEL INFORMATION</p>";
    HURACÁN_SPEED_power_SPAN.innerHTML =
      "POWER(CV)/POWER(KM) <p>640CV/470KM</p>";
    fuel_infor_hurucan_conten.innerHTML =
      "Fuel consumption and emission values of Huracán Evo Spyder*; Fuel consumption combined: 14,9 l/100km (WLTP); CO2-emissions combined: 338 g/km (WLTP)";
  };
  //end
  // ham lay thong tin urus_s
  urus_s = () => {
    var URUS_START_ELEMENT_content_SPAN = document.querySelector(
      ".URUS-content-START-ELEMENT > a > span"
    );
    var URUS_SPEED_ELEMENT_content_SPAN = document.querySelector(
      ".URUS-SPEED > .URUS-SPEED-ELEMENT-content > span"
    );
    var URUS_SPEED_ELEMENT_num_content_SPAN = document.querySelector(
      ".URUS-SPEED-num > .URUS-SPEED-ELEMENT-content > span"
    );
    var URUS_information_content_SPAN = document.querySelector(
      ".URUS-information-content > span"
    );
    var URUS_SPEED_power_SPAN = document.querySelector(
      ".URUS-SPEED-power > .URUS-SPEED-ELEMENT-content > span"
    );
    const fuel_infor_URUS_conten = document.querySelector(
      ".fuel_infor-URUS-conten"
    );

    URUS_START_ELEMENT_content_SPAN.textContent =
      "CREATE YOUR URUS START CONFIGURATION";
    URUS_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>305KM/H</p>";
    URUS_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.5S</p>";
    URUS_information_content_SPAN.innerHTML = "URUS S <p>MODEL INFORMATION</p>";
    URUS_SPEED_power_SPAN.innerHTML = "POWER(CV)/POWER(KM) <p>666CV/490KM</p>";
    fuel_infor_URUS_conten.innerHTML =
      "Fuel consumption and emission values of Urus S*; Fuel consumption combined: 14,1 l/100km (WLTP); CO2-emissions combined: 320 g/km (WLTP)";
  };
  //end

  // ham lay thong tin urus_PERFORMANTE
  urus_PERFORMANTE = () => {
    var URUS_START_ELEMENT_content_SPAN = document.querySelector(
      ".URUS-content-START-ELEMENT > a > span"
    );
    var URUS_SPEED_ELEMENT_content_SPAN = document.querySelector(
      ".URUS-SPEED > .URUS-SPEED-ELEMENT-content > span"
    );
    var URUS_SPEED_ELEMENT_num_content_SPAN = document.querySelector(
      ".URUS-SPEED-num > .URUS-SPEED-ELEMENT-content > span"
    );
    var URUS_information_content_SPAN = document.querySelector(
      ".URUS-information-content > span"
    );
    var URUS_SPEED_power_SPAN = document.querySelector(
      ".URUS-SPEED-power > .URUS-SPEED-ELEMENT-content > span"
    );
    const fuel_infor_URUS_conten = document.querySelector(
      ".fuel_infor-URUS-conten"
    );

    URUS_START_ELEMENT_content_SPAN.textContent =
      "CREATE YOUR URUS START CONFIGURATION";
    URUS_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>306KM/H</p>";
    URUS_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.3S</p>";
    URUS_information_content_SPAN.innerHTML =
      "URUS PERFORMANTE <p>MODEL INFORMATION</p>";
    URUS_SPEED_power_SPAN.innerHTML = "POWER(CV)/POWER(KM) <p>666CV/490KM</p>";
    fuel_infor_URUS_conten.innerHTML =
      "Fuel consumption and emission values of Urus Performante*; Fuel consumption combined: 14,1 l/100km (WLTP); CO2-emissions combined: 320 g/km (WLTP)";
  };
  //END

  // CAC HAM AN , HIEN CAC LOAI XE..............

  // HAM HIEN CONCEPT

  visibility_concept = () => {
    this.setState({ visibilityConcept: true });
    this.setState({ addclass: "MODELS MODMODELS-element-transformed" });
    this.setState({ opacityTransform: true });
    this.setState({ opacityConcept: true });
  };

  //END

  // HAM AN CONCEPT

  hidden_concept = () => {
    this.setState({ visibilityConcept: false });
    this.setState({ opacityTransform: false });
    this.setState({ opacityConcept: false });
    this.setState({ MODLESCONCEPTHidden: "MODLES-CONCEPT" });
  };

  //END

  // HAM HIEN LIMITED

  visibility_limited = () => {
    this.setState({ addclass: "MODELS MODMODELS-element-transformed" });
    this.setState({ visibilityLimited: true });
    this.setState({ opacityTransformLimited: true });
    this.setState({ opacityLimited: true });
    this.setState({ LIMITEDOPACITY: "LIMITED-SPEED-ELEMENT-content opacity" });
  };

  //END

  // HAM AN LIMITED

  hidden_limited = () => {
    // this.setState({ addclass: 'MODELS MODMODELS-element-transformed' });
    this.setState({ visibilityLimited: false });
    this.setState({ opacityTransformLimited: false });
    this.setState({ opacityLimited: false });
    this.setState({ LIMITEDOPACITY: "LIMITED-SPEED-ELEMENT-content" });
    this.setState({ MODLESLIMITEDHidden: "MODLES-LIMITED" });
  };

  //END

  // HAM HIEN URUS

  visibility_urus = () => {
    this.setState({ visibilityURUS: true });
    this.setState({ addclass: "MODELS MODMODELS-element-transformed" });
    this.setState({ opacityTransformURUS: true });
    this.setState({ opacityURUS: true });
    this.setState({ URUSOPACITY: "URUS-SPEED-ELEMENT-content opacity" });
  };

  //END

  // HAM AN URUS

  hidden_urus = () => {
    this.setState({ visibilityURUS: false });
    // this.setState({ addclass: 'MODELS MODMODELS-element-transformed' });
    this.setState({ opacityTransformURUS: false });
    this.setState({ opacityURUS: false });
    this.setState({ URUSOPACITY: "URUS-SPEED-ELEMENT-content" });
    this.setState({ MODLESURUSHidden: "MODLES-URUS" });
  };

  //END

  // ham hien huracan

  visibility_huracan = () => {
    this.setState({ visibilityHURACAN: true });
    this.setState({ addclass: "MODELS MODMODELS-element-transformed" });
    this.setState({ opacityTransformHURACAN: true });
    this.setState({ opacityHURACAN: true });
    this.setState({ HURACANOPACITY: "HURACÁN-SPEED-ELEMENT-content opacity" });
  };

  //END

  // ham an huracan

  hidden_huracan = () => {
    this.setState({ visibilityHURACAN: false });
    // this.setState({ addclass: 'MODELS MODMODELS-element-transformed' });
    this.setState({ opacityTransformHURACAN: false });
    this.setState({ opacityHURACAN: false });
    this.setState({ HURACANOPACITY: "HURACÁN-SPEED-ELEMENT-content" });
    this.setState({ MODLESHURACANHidden: "MODLES-HURACÁN" });
  };
  //end

  // ham hien REVUELTO

  visibility_REVUELTO = () => {
    this.setState({
      addclass: "MODELS MODMODELS-element-transformed transformed-MODELS",
    });
    this.setState({ opacityTransformREVUELTO: true });
    this.setState({ opacityREVUELTO: true });
    this.setState({ REVUELTOOPACITY: "SPEED-ELEMENT-content opacity" });
    this.setState({
      MODLESREVUELTOHidden:
        "MODELS_element-REVUELTO MODELS_element-REVUELTO-show",
    });
  };

  //end

  // ham an REVUELTO

  hidden_REVUELTO = () => {
    // this.setState({ addclass: 'MODELS transformed-MODELS' })
    this.setState({ opacityTransformREVUELTO: false });
    this.setState({ opacityREVUELTO: false });
    this.setState({ REVUELTOOPACITY: "SPEED-ELEMENT-content" });
    this.setState({ MODLESREVUELTOHidden: "MODELS_element-REVUELTO" });
  };

  //end

  // KHU VUC EVENT ......................

  PRE_OWNEDmouseover = () => {
    this.setState({ addclass: "MODELS transformed-MODELS" });
    this.hidden_REVUELTO();
    this.hidden_huracan();
    this.hidden_urus();
    this.hidden_limited();
    this.hidden_concept();
  };

  modelTabmouseover = () => {
    this.setState({ addclass: "MODELS transformed-MODELS" });
    this.setState({ addclass1: false });
    this.setState({ addclass2: false });
    this.hidden_REVUELTO();
    this.setState({ visibility: true });
  };

  REVUELTOmouseover = () => {
    this.visibility_REVUELTO();
    this.hidden_huracan();
    this.hidden_urus();
    this.hidden_limited();
    this.hidden_concept();
  };

  // event huracan element

  HURACANmouseover = () => {
    this.hidden_huracan();
    this.setState({
      MODLESHURACANHidden: "MODLES-HURACÁN MODELS_element-HURACÁN-show",
    });
    this.hidden_REVUELTO();
    this.hidden_urus();
    this.hidden_limited();
    this.hidden_concept();
    this.setState({ addclass: "MODELS transformed-MODELS" });
    const MODLES_HURACÁN = document.querySelector(".MODLES-HURACÁN");
    MODLES_HURACÁN.style.backgroundImage = "";
  };

  HURACÁN_STERRATOmouseover = () => {
    this.visibility_huracan();
    this.hidden_REVUELTO();
    this.hidden_urus();
    this.huracan_sterrato();
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    this.setState({
      MODLESHURACANHidden:
        "MODLES-HURACÁN MODELS_element-HURACÁN-show MODLES-HURACÁN-background",
    });
    const MODLES_HURACÁN = document.querySelector(".MODLES-HURACÁN");
    MODLES_HURACÁN.style.backgroundImage = `url(${huracan_sterrato})`;
  };

  HURACÁN_TECNICAmouseover = () => {
    this.visibility_huracan();
    this.hidden_REVUELTO();
    this.huracan_tecnica();
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    this.setState({
      MODLESHURACANHidden:
        "MODLES-HURACÁN MODELS_element-HURACÁN-show MODLES-HURACÁN-background",
    });
    const MODLES_HURACÁN = document.querySelector(".MODLES-HURACÁN");
    MODLES_HURACÁN.style.backgroundImage = `url(${huracan_tecnica})`;
  };
  HURACÁN_STOmouseover = () => {
    this.visibility_huracan();
    this.hidden_REVUELTO();
    this.huracan_sto();
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    this.setState({
      MODLESHURACANHidden:
        "MODLES-HURACÁN MODELS_element-HURACÁN-show MODLES-HURACÁN-background",
    });
    const MODLES_HURACÁN = document.querySelector(".MODLES-HURACÁN");
    MODLES_HURACÁN.style.backgroundImage = `url(${huracan_sto})`;
  };

  HURACÁN_EVO_SPYDERmouseover = () => {
    this.visibility_huracan();
    this.hidden_REVUELTO();
    this.huracan_evo_spyder();
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    this.setState({
      MODLESHURACANHidden:
        "MODLES-HURACÁN MODELS_element-HURACÁN-show MODLES-HURACÁN-background",
    });
    const MODLES_HURACÁN = document.querySelector(".MODLES-HURACÁN");
    MODLES_HURACÁN.style.backgroundImage = `url(${huracan_evo_spyder})`;
  };
  //end

  // event CONCEPT element
  CONCEPTmouseover = () => {
    this.hidden_concept();
    this.setState({
      MODLESCONCEPTHidden: "MODLES-CONCEPT MODELS_element-CONCEPT-show",
    });
    this.hidden_REVUELTO();
    this.hidden_huracan();
    this.hidden_urus();
    this.hidden_limited();
    this.setState({ addclass: "MODELS transformed-MODELS" });
    const MODLES_CONCEPT = document.querySelector(".MODLES-CONCEPT");

    MODLES_CONCEPT.style.backgroundImage = "";
  };

  CONCEPT_TERZO_MILLENNIOmouseover = () => {
    this.visibility_concept();
    this.concept_terzo();
    this.setState({
      MODLESCONCEPTHidden:
        "MODLES-CONCEPT MODELS_element-CONCEPT-show MODLES-CONCEPT-background",
    });
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    const MODLES_CONCEPT = document.querySelector(".MODLES-CONCEPT");
    MODLES_CONCEPT.style.backgroundImage = `url(${concept_terzo})`;
  };
  CONCEPT_ASTERIONmouseover = () => {
    this.visibility_concept();
    this.concept_asterion();
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    this.setState({
      MODLESCONCEPTHidden:
        "MODLES-CONCEPT MODELS_element-CONCEPT-show MODLES-CONCEPT-background",
    });
    const MODLES_CONCEPT = document.querySelector(".MODLES-CONCEPT");
    MODLES_CONCEPT.style.backgroundImage = `url(${concept_asterion})`;
  };
  CONCEPT_ESTOQUEmouseover = () => {
    this.visibility_concept();
    this.concept_estoque();
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    this.setState({
      MODLESCONCEPTHidden:
        "MODLES-CONCEPT MODELS_element-CONCEPT-show MODLES-CONCEPT-background",
    });
    const MODLES_CONCEPT = document.querySelector(".MODLES-CONCEPT");
    MODLES_CONCEPT.style.backgroundImage = `url(${concept_estoque})`;
  };

  // event urus element

  URUSmouseover = () => {
    this.hidden_urus();
    this.setState({ MODLESURUSHidden: "MODLES-URUS MODELS_element-URUS-show" });
    this.hidden_REVUELTO();
    this.hidden_huracan();
    this.hidden_limited();
    this.hidden_concept();
    this.setState({ addclass: "MODELS transformed-MODELS" });
    const MODLES_URUS = document.querySelector(".MODLES-URUS");
    MODLES_URUS.style.backgroundImage = "";
  };

  URUS_Smouseover = () => {
    this.visibility_urus();
    this.urus_s();
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    this.setState({
      MODLESURUSHidden:
        "MODLES-URUS MODELS_element-URUS-show MODLES-URUS-background",
    });
    const MODLES_URUS = document.querySelector(".MODLES-URUS");
    MODLES_URUS.style.backgroundImage = `url(${urus_s})`;
  };

  URUS_PERFORMANTEmouseover = () => {
    this.visibility_urus();
    this.urus_PERFORMANTE();
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    this.setState({
      MODLESURUSHidden:
        "MODLES-URUS MODELS_element-URUS-show MODLES-URUS-background",
    });
    const MODLES_URUS = document.querySelector(".MODLES-URUS");
    MODLES_URUS.style.backgroundImage = `url(${urus_PERFORMANTE})`;
  };

  //end

  // event LIMITED element

  LIMITEDmouseover = () => {
    this.hidden_limited();
    this.setState({
      MODLESLIMITEDHidden: "MODLES-LIMITED MODELS_element-LIMITED-show",
    });
    this.hidden_REVUELTO();
    this.hidden_huracan();
    this.hidden_urus();
    this.hidden_concept();
    this.setState({ addclass: "MODELS transformed-MODELS" });
    const MODLES_LIMITED = document.querySelector(".MODLES-LIMITED");
    MODLES_LIMITED.style.backgroundImage = "";
  };

  LIMITED_LPImouseover = () => {
    this.visibility_limited();
    this.limited_lpi();
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    this.setState({
      MODLESLIMITEDHidden:
        "MODLES-LIMITED MODELS_element-LIMITED-show MODLES-LIMITED-background",
    });
    const MODLES_LIMITED = document.querySelector(".MODLES-LIMITED");
    MODLES_LIMITED.style.backgroundImage = `url(${limited_lpi})`;
  };

  LIMITED_FKPmouseover = () => {
    this.visibility_limited();
    this.limited_fkp();
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    this.setState({
      MODLESLIMITEDHidden:
        "MODLES-LIMITED MODELS_element-LIMITED-show MODLES-LIMITED-background",
    });
    const MODLES_LIMITED = document.querySelector(".MODLES-LIMITED");
    MODLES_LIMITED.style.backgroundImage = `url(${limited_fkp})`;
  };
  LIMITED_ROADSTERmouseover = () => {
    this.visibility_limited();
    this.limited_roadster();
    this.setState({
      addclass: "MODELS transformed-MODELS MODMODELS-element-transformed",
    });
    this.setState({
      MODLESLIMITEDHidden:
        "MODLES-LIMITED MODELS_element-LIMITED-show MODLES-LIMITED-background",
    });
    const MODLES_LIMITED = document.querySelector(".MODLES-LIMITED");
    MODLES_LIMITED.style.backgroundImage = `url(${limited_roadster})`;
  };

  //su kien
  STOREmouseover = () => {
    this.setState({ addclass: "MODELS" });
    this.setState({ addclass1: false });
    this.setState({ addclass2: false });
    this.setState({ OWNERSHIPelement: "OWNERSHIP_element" });
    this.setState({ MOTOSPORTelement: "MOTOSPORT_element" });
    this.hidden_REVUELTO();
    this.hidden_huracan();
    this.hidden_urus();
    this.hidden_limited();
    this.hidden_concept();
  };
  FEEDBACKmouseover = () => {
    this.setState({ addclass: "MODELS" });
    this.setState({ addclass1: false });
    this.setState({ addclass2: false });
    this.setState({ OWNERSHIPelement: "OWNERSHIP_element" });
    this.setState({ MOTOSPORTelement: "MOTOSPORT_element" });
    this.hidden_REVUELTO();
    this.hidden_huracan();
    this.hidden_urus();
    this.hidden_limited();
    this.hidden_concept();
  };
  BEYONDmouseover = () => {
    this.setState({ addclass: "MODELS" });
    this.setState({ addclass1: false });
    this.setState({ addclass2: false });
    this.setState({ OWNERSHIPelement: "OWNERSHIP_element" });
    this.setState({ MOTOSPORTelement: "MOTOSPORT_element" });
    this.hidden_REVUELTO();
    this.hidden_huracan();
    this.hidden_urus();
    this.hidden_limited();
    this.hidden_concept();
  };
  OWNERSHIPmouseover = () => {
    this.setState({ addclass: "MODELS" });
    this.setState({ addclass1: true });
    this.setState({ addclass2: false });
    this.setState({
      OWNERSHIPelement: "OWNERSHIP_element transformed-OWNERSHIP",
    });
    this.setState({ MOTOSPORTelement: "MOTOSPORT_element" });
    this.setState({ visibility: true });
    this.hidden_REVUELTO();
    this.hidden_huracan();
    this.hidden_urus();
    this.hidden_limited();
    this.hidden_concept();
  };
  MOTOSPORTmouseover = () => {
    this.setState({ addclass: "MODELS" });
    this.setState({ addclass2: true });
    this.setState({ addclass1: false });
    this.setState({ OWNERSHIPelement: "OWNERSHIP_element" });
    this.setState({
      MOTOSPORTelement: "MOTOSPORT_element transformed-MOTOSPORT",
    });

    this.hidden_REVUELTO();
    this.hidden_huracan();
    this.hidden_urus();
    this.hidden_limited();
    this.hidden_concept();
    this.setState({ visibility: true });
  };

  modelElementmouseleave = (event) => {
    const modelElement = document.querySelector(".MODELS");
    const targetRect = modelElement.getBoundingClientRect();
    const mouseY = event.clientY;
    if (mouseY > targetRect.bottom) {
      this.setState({ MODLESCONCEPTHidden: "MODLES-CONCEPT" });
      this.setState({ MODLESLIMITEDHidden: "MODLES-LIMITED" });
      this.setState({ MODLESURUSHidden: "MODLES-URUS" });
      this.setState({ MODLESHURACANHidden: "MODLES-HURACÁN" });
      this.setState({ addclass: "MODELS" });
      this.setState({ visibility: false });

      const MODLES_LIMITED = document.querySelector(".MODLES-LIMITED");
      const MODLES_HURACÁN = document.querySelector(".MODLES-HURACÁN");
      const MODLES_URUS = document.querySelector(".MODLES-URUS");
      const MODLES_CONCEPT = document.querySelector(".MODLES-CONCEPT");
      MODLES_HURACÁN.style.backgroundImage = "";
      MODLES_URUS.style.backgroundImage = "";
      MODLES_LIMITED.style.backgroundImage = "";
      MODLES_CONCEPT.style.backgroundImage = "";
      this.hidden_REVUELTO();
    }
  };

  //end
  OWNERSHIP_elementmouseleave = (event) => {
    const OWNERSHIP_element = document.querySelector(".OWNERSHIP");
    const targetRect = OWNERSHIP_element.getBoundingClientRect();
    const mouseY = event.clientY;
    if (mouseY > targetRect.bottom) {
      this.setState({ addclass1: false });
      this.setState({ opacityTransformREVUELTO: false });
      this.setState({ visibility: false });
    }
  };
  MOTOSPORT_elementmouseleave = (event) => {
    const MOTOSPORT_element = document.querySelector(".MOTOSPORT");
    const targetRect = MOTOSPORT_element.getBoundingClientRect();
    const mouseY = event.clientY;
    if (mouseY > targetRect.bottom) {
      this.setState({ addclass2: false });
      this.setState({ opacityTransformREVUELTO: false });
      this.setState({ visibility: false });
    }
  };

  MOTOSPORT_mobileclick = (event) => {
    event.preventDefault();
    this.setState({ menu_mobile_lv2_content: true });
    this.setState({ MOTOSPORT_mobile_lv2_content_detail: true });
    this.setState({ OWNERSHIP_mobile_lv2_content_detail: false });
    this.setState({ MODELS_mobile_lv2_content_detail: false });
  };
  OWNERSHIP_mobileclick = (event) => {
    event.preventDefault();
    this.setState({ menu_mobile_lv2_content: true });
    this.setState({ MOTOSPORT_mobile_lv2_content_detail: false });
    this.setState({ OWNERSHIP_mobile_lv2_content_detail: true });
    this.setState({ MODELS_mobile_lv2_content_detail: false });
  };
  MODELS_mobileclick = () => {
    this.setState({ menu_mobile_lv2_content: true });
    this.setState({ MOTOSPORT_mobile_lv2_content_detail: false });
    this.setState({ OWNERSHIP_mobile_lv2_content_detail: false });
    this.setState({ MODELS_mobile_lv2_content_detail: true });
  };

  back_mobileclick = () => {
    this.setState({ menu_mobile_lv2_content: false });
    this.setState({ MOTOSPORT_mobile_lv2_content_detail: false });
    this.setState({ OWNERSHIP_mobile_lv2_content_detail: false });
    this.setState({ MODELS_mobile_lv2_content_detail: false });
  };

  CONCEPT_mobileclick = (event) => {
    event.preventDefault();
    this.setState({ HURACAN_mobile_height: false });
    this.setState({ LIMITED_mobile_height: false });
    this.setState({ URUS_mobile_height: false });
  };
  HURACÁN_mobileclick = (event) => {
    event.preventDefault();
    this.setState({ CONCEPT_mobile_height: false });
    this.setState({ LIMITED_mobile_height: false });
    this.setState({ URUS_mobile_height: false });
  };
  URUS_mobileclick = (event) => {
    event.preventDefault();
    this.setState({ CONCEPT_mobile_height: false });
    this.setState({ HURACAN_mobile_height: false });
    this.setState({ LIMITED_mobile_height: false });
  };
  LIMITED_mobileclick = (event) => {
    event.preventDefault();
    this.setState({ CONCEPT_mobile_height: false });
    this.setState({ HURACAN_mobile_height: false });
    this.setState({ URUS_mobile_height: false });
  };

  handleURUSToggleClick = (event) => {
    this.setState((prevState) => ({
      isURUSMobileHeightActive: !prevState.isURUSMobileHeightActive,
    }));
    this.URUS_mobileclick(event);
  };

  handleCONCEPTToggleClick = (event) => {
    this.setState((prevState) => ({
      isCONCEPTMobileHeightActive: !prevState.isCONCEPTMobileHeightActive,
    }));
    this.CONCEPT_mobileclick(event);
  };

  handleHURACANToggleClick = (event) => {
    this.setState((prevState) => ({
      isHURACANMobileHeightActive: !prevState.isHURACANMobileHeightActive,
    }));
    this.HURACÁN_mobileclick(event);
  };

  handleLIMITEDToggleClick = (event) => {
    this.setState((prevState) => ({
      isLIMITEDMobileHeightActive: !prevState.isLIMITEDMobileHeightActive,
    }));
    this.LIMITED_mobileclick(event);
  };

  list_mobile_down_buttonclick = () => {
    this.setState({ menu_mobile_lv2: true });
    this.setState({ list_mobile_down: true });
    this.setState({ list_mobile_up: true });
  };
  list_mobile_up_buttonclick = () => {
    this.setState({ menu_mobile_lv2: false });
    this.setState({ list_mobile_down: false });
    this.setState({ list_mobile_up: false });
  };

  render() {
    return (
      <header>
        <nav>
          <div className="left">
            <div className="logo">
              <img src={require("../../assets/image/logo.png")} alt="baner" />
            </div>
            <div className="link-left">
              <ul className="MENU-LV1">
                <li>
                  <Link
                    to="/"
                    id="MODELS"
                    className="hover-border"
                    onMouseOver={this.modelTabmouseover}
                  >
                    MODELS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/beyond"
                    id="BEYOND"
                    className="hover-border"
                    onMouseOver={this.BEYONDmouseover}
                  >
                    BEYOND
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ownership"
                    id="OWNERSHIP"
                    className="hover-border"
                    onMouseOver={this.OWNERSHIPmouseover}
                  >
                    OWNERSHIP
                  </Link>
                </li>
                <li>
                  <Link
                    to="/motorsport"
                    id="MOTOSPORT"
                    className="hover-border"
                    onMouseOver={this.MOTOSPORTmouseover}
                  >
                    MOTORSPORT
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    id="STORE"
                    className="hover-border"
                    onMouseOver={this.STOREmouseover}
                  >
                    STORE
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    id="FEEDBACK"
                    className="hover-border"
                    onMouseOver={this.FEEDBACKmouseover}
                  >
                    BLOGS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <ul className="MENU-LV1 icon">
              <li>
                <Link to="">
                  <i id="comment" class="fa-solid fa-message"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i id="blog" class="fas fa-blog"></i>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <i id="survey" class="fa-solid fa-user"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={
              this.state.visibility ? "MENU-LV2 visibility" : "MENU-LV2"
            }
          >
            <div
              className={this.state.addclass}
              onMouseLeave={this.modelElementmouseleave}
            >
              <div className="hidden">
                <ul className="MODELS_element">
                  <li>
                    <Link
                      className="REVUELTO"
                      to="/modeldetail"
                      onMouseOver={this.REVUELTOmouseover}
                    >
                      REVUELTO
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="HURACAN"
                      to=""
                      onMouseOver={this.HURACANmouseover}
                    >
                      HURACÁN
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="URUS"
                      to=""
                      onMouseOver={this.URUSmouseover}
                    >
                      URUS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="PRE-OWNED"
                      to=""
                      onMouseOver={this.PRE_OWNEDmouseover}
                    >
                      PRE-OWNED
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="LIMITED"
                      to=""
                      onMouseOver={this.LIMITEDmouseover}
                    >
                      LIMITED SERIES
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="CONCEPT"
                      to=""
                      onMouseOver={this.CONCEPTmouseover}
                    >
                      CONCEPT
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={this.state.MODLESREVUELTOHidden}>
                <div className="REVUELTO-content-START">
                  <div
                    className={
                      this.state.opacityTransformREVUELTO
                        ? "REVUELTO-content-START-ELEMENT opacity-transform"
                        : "REVUELTO-content-START-ELEMENT"
                    }
                  >
                    <Link to="" className="START-ELEMENT-content">
                      <i class="fas fa-greater-than"></i>
                      <span>CREATE YOUR REVUELTO START CONFIGURATION</span>
                    </Link>
                  </div>
                </div>
                <div className="REVUELTO-content-empty"></div>
                <div className="REVUELTO-SPEED">
                  <div className={this.state.REVUELTOOPACITY}>
                    <span>
                      MAX SPEED
                      <p> &gt; 350KM/H</p>
                    </span>
                  </div>
                </div>
                <div className="REVUELTO-SPEED-num">
                  <div className={this.state.REVUELTOOPACITY}>
                    <span>
                      0-100KM/H <p>2.5S</p>
                    </span>
                  </div>
                </div>
                <div className="REVUELTO-information">
                  <Link
                    to=""
                    className={
                      this.state.opacityTransformREVUELTO
                        ? "REVUELTO-information-content opacity-transform"
                        : "REVUELTO-information-content"
                    }
                  >
                    <i class="fas fa-greater-than"></i>
                    <span>
                      REVUELTO <p>MODEL INFORMATION</p>{" "}
                    </span>
                  </Link>
                </div>
                <div className="REVUELTO-SPEED-power">
                  <div className={this.state.REVUELTOOPACITY}>
                    <span>
                      POWER (COBINED ICE+EE) <p>1015CV</p>
                    </span>
                  </div>
                </div>
                <div className="fuel_infor">
                  <div
                    className={
                      this.state.opacityREVUELTO
                        ? "fuel_infor_conten opacity"
                        : "fuel_infor_conten"
                    }
                  >
                    The vehicle is not yet offered for sale and is therefore not
                    subject to Directive 1999/94/EC.{" "}
                    <p>
                      The fuel consumption and emissions data is in the type
                      approval stage
                    </p>
                  </div>
                </div>
              </div>
              <div className={this.state.MODLESHURACANHidden}>
                <div className="MODELS_element-HURACÁN">
                  <ul className="HURACÁN-element">
                    <li>
                      <Link
                        id="HURACÁN-STERRATO"
                        onMouseOver={this.HURACÁN_STERRATOmouseover}
                      >
                        HURACÁN STERRATO
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="HURACÁN-TECNICA"
                        onMouseOver={this.HURACÁN_TECNICAmouseover}
                      >
                        HURACÁN TECNICA
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="HURACÁN-STO"
                        onMouseOver={this.HURACÁN_STOmouseover}
                      >
                        HURACÁN STO
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="HURACÁN-EVO-SPYDER"
                        onMouseOver={this.HURACÁN_EVO_SPYDERmouseover}
                      >
                        HURACÁN EVO SPYDER
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      this.state.visibilityHURACAN
                        ? "HURACÁN-content-START visibility"
                        : "HURACÁN-content-START"
                    }
                  >
                    <div
                      className={
                        this.state.opacityTransformHURACAN
                          ? "HURACÁN-content-START-ELEMENT opacity-transform"
                          : "HURACÁN-content-START-ELEMENT"
                      }
                    >
                      <Link to="" className="HURACÁN-START-ELEMENT-content">
                        <i class="fas fa-greater-than"></i>
                        <span></span>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={
                      this.state.visibilityHURACAN
                        ? "HURACÁN-content-empty visibility"
                        : "HURACÁN-content-empty"
                    }
                  ></div>
                  <div
                    className={
                      this.state.visibilityHURACAN
                        ? "HURACÁN-SPEED visibility"
                        : "HURACÁN-SPEED"
                    }
                  >
                    <div className={this.state.HURACANOPACITY}>
                      <span></span>
                    </div>
                  </div>
                  <div
                    className={
                      this.state.visibilityHURACAN
                        ? "HURACÁN-SPEED-num visibility opacity"
                        : "HURACÁN-SPEED-num"
                    }
                  >
                    <div className={this.state.HURACANOPACITY}>
                      <span></span>
                    </div>
                  </div>
                  <div
                    className={
                      this.state.visibilityHURACAN
                        ? "HURACÁN-information visibility"
                        : "HURACÁN-information"
                    }
                  >
                    <Link
                      to=""
                      className={
                        this.state.opacityTransformHURACAN
                          ? "HURACÁN-information-content opacity-transform"
                          : "HURACÁN-information-content"
                      }
                    >
                      <i class="fas fa-greater-than"></i>
                      <span> </span>
                    </Link>
                  </div>
                  <div
                    className={
                      this.state.visibilityHURACAN
                        ? "HURACÁN-SPEED-power visibility opacity"
                        : "HURACÁN-SPEED-power"
                    }
                  >
                    <div className={this.state.HURACANOPACITY}>
                      <span></span>
                    </div>
                  </div>
                  <div className="fuel_infor-hurucan">
                    <div
                      className={
                        this.state.opacityHURACAN
                          ? "fuel_infor-hurucan-conten opacity"
                          : "fuel_infor-hurucan-conten"
                      }
                    ></div>
                  </div>
                </div>
              </div>
              <div className={this.state.MODLESURUSHidden}>
                <div className="MODELS_element-URUS">
                  <ul className="URUS-element">
                    <li>
                      <Link
                        id="URUS-S"
                        to=""
                        onMouseOver={this.URUS_Smouseover}
                      >
                        URUS S
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="URUS-PERFORMANTE"
                        to=""
                        onMouseOver={this.URUS_PERFORMANTEmouseover}
                      >
                        URUS PERFORMANTE
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      this.state.visibilityURUS
                        ? "URUS-content-START visibility"
                        : "URUS-content-START"
                    }
                  >
                    <div
                      className={
                        this.state.opacityTransformURUS
                          ? "URUS-content-START-ELEMENT opacity-transform"
                          : "URUS-content-START-ELEMENT"
                      }
                    >
                      <Link to="" className="URUS-START-ELEMENT-content">
                        <i class="fas fa-greater-than"></i>
                        <span></span>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={
                      this.state.visibilityURUS
                        ? "URUS-content-empty visibility"
                        : "URUS-content-empty"
                    }
                  ></div>
                  <div
                    className={
                      this.state.visibilityURUS
                        ? "URUS-SPEED visibility"
                        : "URUS-SPEED"
                    }
                  >
                    <div className={this.state.URUSOPACITY}>
                      <span></span>
                    </div>
                  </div>
                  <div
                    className={
                      this.state.visibilityURUS
                        ? "URUS-SPEED-num visibility opacity"
                        : "URUS-SPEED-num"
                    }
                  >
                    <div className={this.state.URUSOPACITY}>
                      <span></span>
                    </div>
                  </div>
                  <div
                    className={
                      this.state.visibilityURUS
                        ? "URUS-information visibility"
                        : "URUS-information"
                    }
                  >
                    <Link
                      to=""
                      className={
                        this.state.opacityTransformURUS
                          ? "URUS-information-content opacity-transform"
                          : "URUS-information-content"
                      }
                    >
                      <i class="fas fa-greater-than"></i>
                      <span> </span>
                    </Link>
                  </div>
                  <div
                    className={
                      this.state.visibilityURUS
                        ? "URUS-SPEED-power visibility opacity"
                        : "URUS-SPEED-power"
                    }
                  >
                    <div className={this.state.URUSOPACITY}>
                      <span></span>
                    </div>
                  </div>
                  <div className="fuel_infor-URUS">
                    <div
                      className={
                        this.state.opacityURUS
                          ? "fuel_infor-URUS-conten opacity"
                          : "fuel_infor-URUS-conten"
                      }
                    ></div>
                  </div>
                </div>
              </div>
              <div className={this.state.MODLESLIMITEDHidden}>
                <div className="MODELS_element-LIMITED">
                  <ul className="LIMITED-element">
                    <li>
                      <Link
                        id="LIMITED-LPI"
                        to=""
                        onMouseOver={this.LIMITED_FKPmouseover}
                      >
                        COUNTACH LPI 800-4
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="LIMITED-FKP"
                        to=""
                        onMouseOver={this.LIMITED_LPImouseover}
                      >
                        SIÁN FKP 37
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="LIMITED-ROADSTER"
                        to=""
                        onMouseOver={this.LIMITED_ROADSTERmouseover}
                      >
                        SIÁN ROADSTER
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      this.state.visibilityLimited
                        ? "LIMITED-content-START visibility"
                        : "LIMITED-content-START"
                    }
                  >
                    <div
                      className={
                        this.state.opacityTransformLimited
                          ? "LIMITED-content-START-ELEMENT opacity-transform"
                          : "LIMITED-content-START-ELEMENT"
                      }
                    ></div>
                  </div>
                  <div
                    className={
                      this.state.visibilityLimited
                        ? "LIMITED-content-empty visibility"
                        : "LIMITED-content-empty"
                    }
                  ></div>
                  <div
                    className={
                      this.state.visibilityLimited
                        ? "LIMITED-SPEED visibility"
                        : "LIMITED-SPEED"
                    }
                  >
                    <div className={this.state.LIMITEDOPACITY}>
                      <span></span>
                    </div>
                  </div>
                  <div
                    className={
                      this.state.visibilityLimited
                        ? "LIMITED-SPEED-num visibility opacity"
                        : "LIMITED-SPEED-num"
                    }
                  >
                    <div className={this.state.LIMITEDOPACITY}>
                      <span></span>
                    </div>
                  </div>
                  <div
                    className={
                      this.state.visibilityLimited
                        ? "LIMITED-information visibility"
                        : "LIMITED-information"
                    }
                  >
                    <Link
                      to=""
                      className={
                        this.state.opacityTransformLimited
                          ? "LIMITED-information-content opacity-transform"
                          : "LIMITED-information-content"
                      }
                    >
                      <i class="fas fa-greater-than"></i>
                      <span> </span>
                    </Link>
                  </div>
                  <div
                    className={
                      this.state.visibilityLimited
                        ? "LIMITED-SPEED-power visibility opacity"
                        : "LIMITED-SPEED-power"
                    }
                  >
                    <div className={this.state.LIMITEDOPACITY}>
                      <span></span>
                    </div>
                  </div>
                  <div className="fuel_infor-LIMITED">
                    <div
                      className={
                        this.state.opacityLimited
                          ? "fuel_infor-LIMITED-conten opacity"
                          : "fuel_infor-LIMITED-conten"
                      }
                    ></div>
                  </div>
                </div>
              </div>
              <div className={this.state.MODLESCONCEPTHidden}>
                <div className="MODELS_element-CONCEPT">
                  <ul className="CONCEPT-element">
                    <li>
                      <Link
                        id="CONCEPT-TERZO-MILLENNIO"
                        to=""
                        onMouseOver={this.CONCEPT_TERZO_MILLENNIOmouseover}
                      >
                        TERZO MILLENNIO
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="CONCEPT-ASTERION"
                        to=""
                        onMouseOver={this.CONCEPT_ASTERIONmouseover}
                      >
                        ASTERION
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="CONCEPT-ESTOQUE"
                        to=""
                        onMouseOver={this.CONCEPT_ESTOQUEmouseover}
                      >
                        ESTOQUE
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      this.state.visibilityConcept
                        ? "CONCEPT-information visibility"
                        : "CONCEPT-information"
                    }
                  >
                    <Link
                      to=""
                      className={
                        this.state.opacityTransformConcept
                          ? "CONCEPT-information-content"
                          : "CONCEPT-information-content opacity-transform"
                      }
                    >
                      <i class="fas fa-greater-than"></i>
                      <span> </span>
                    </Link>
                  </div>
                  <div
                    className={
                      this.state.visibilityConcept
                        ? "CONCEPT-GALLERY visibility"
                        : "CONCEPT-GALLERY"
                    }
                  >
                    <Link
                      to=""
                      className={
                        this.state.opacityTransformConcept
                          ? "CONCEPT-GALLERY-ELEMENT"
                          : "CONCEPT-GALLERY-ELEMENT opacity-transform"
                      }
                    >
                      <i class="fas fa-greater-than"></i>
                      <span> </span>
                    </Link>
                  </div>
                  <div className="fuel_infor-CONCEPT">
                    <div
                      className={
                        this.state.opacityConcept
                          ? "fuel_infor-CONCEPT-conten"
                          : "fuel_infor-CONCEPT-conten"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                this.state.addclass1
                  ? "OWNERSHIP transformed-OWNERSHIP"
                  : "OWNERSHIP"
              }
              onMouseLeave={this.OWNERSHIP_elementmouseleave}
            >
              <div className="hidden">
                <ul className={this.state.OWNERSHIPelement}>
                  <li>
                    <Link to="/connect">CONNECTIVITY</Link>
                  </li>
                  <li>
                    <Link to="/customerapp">CUSTOMER</Link>
                  </li>
                  <li>
                    <Link to="/mobilityprogram">MOBILITY PROGRAM</Link>
                  </li>
                  <li>
                    <Link to="/classics">CLASSICS</Link>
                  </li>
                  <li>
                    <Link to="/service">SERVICE</Link>
                  </li>
                  <li>
                    <Link to="/campaign">RECALL CAMPAIGN</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={
                this.state.addclass2
                  ? "MOTOSPORT transformed-MOTOSPORT"
                  : "MOTOSPORT"
              }
              onMouseLeave={this.MOTOSPORT_elementmouseleave}
            >
              <div className="hidden">
                <ul className={this.state.MOTOSPORTelement}>
                  <li>
                    <Link to="/motorsportsc">SC63</Link>
                  </li>
                  <li>
                    <Link to="/motorsporttrofeo">SUPER TROFEO</Link>
                  </li>
                  <li>
                    <Link to="/motorsportmodels">MOTOSPORT MODELS</Link>
                  </li>
                  <li>
                    <Link to="/motorsportdriver">DRIVERS</Link>
                  </li>
                  <li>
                    <Link to="/motorsportexperience">EXPERIENCE</Link>
                  </li>
                  <li>
                    <Link to="/motorsportesports">ESPORTS</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="nav_mobile">
          <div className="menu_mobile_lv1">
            <div className="menu_mobile_lv1-left">
              <img src={require("../../assets/image/logo.png")} alt="baner" />
            </div>
            <div className="menu_mobile_lv1-right">
              <div className="menu_mobile_lv1-right-item">
                <Link to="">
                  <i id="comment-mobile" className="far fa-comment-dots"></i>
                </Link>
              </div>
              <div className="menu_mobile_lv1-right-item">
                <Link to="">
                  <i id="blog--mobile" className="fas fa-blog"></i>
                </Link>
              </div>
              <div className="menu_mobile_lv1-right-item">
                <Link to="/login">

                  <i id="blog--mobile" class="fa-solid fa-user"></i>
                </Link>
              </div>

              <div className="menu_mobile_lv1-right-item list-mobile">
                <div
                  className={
                    this.state.list_mobile_down
                      ? "list-mobile-down visibility_hide"
                      : "list-mobile-down"
                  }
                  onClick={this.list_mobile_down_buttonclick}
                >
                  <i
                    className="fas fa-sort-amount-down-alt"
                    id="list-mobile-down"
                  ></i>
                </div>
                <div
                  className={
                    this.state.list_mobile_up
                      ? "list-mobile-up visibility_show"
                      : "list-mobile-up"
                  }
                  onClick={this.list_mobile_up_buttonclick}
                >
                  <i
                    className="fas fa-sort-amount-up-alt"
                    id="list-mobile-up"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              this.state.menu_mobile_lv2
                ? "menu_mobile_lv2 menu_mobile_lv2_height"
                : "menu_mobile_lv2"
            }
          >
            <ul
              className={
                this.state.menu_mobile_lv2_content
                  ? "menu_mobile_lv2-content menu_mobile_lv2_transform_x"
                  : "menu_mobile_lv2-content"
              }
            >
              <li
                className="menu_mobile_lv2-content-item"
                id="MODELS-mobile"
                onClick={this.MODELS_mobileclick}
              >
                <Link to="/model">MODELS</Link>
                <i class="fas fa-caret-right"></i>
              </li>
              <li className="menu_mobile_lv2-content-item" id="BEYOND-mobile">
                <Link to="/beyond">BEYOND</Link>
              </li>
              <li
                className="menu_mobile_lv2-content-item"
                id="OWNERSHIP-mobile"
                onClick={this.OWNERSHIP_mobileclick}
              >
                <Link to="/ownership">OWNERSHIP</Link>
                <i className="fas fa-caret-right"></i>
              </li>
              <li
                className="menu_mobile_lv2-content-item"
                id="MOTOSPORT-mobile"
              >
                <Link to="/motosport" onClick={this.MOTOSPORT_mobileclick}>
                  MOTOSPORT
                </Link>
                <i className="fas fa-caret-right"></i>
              </li>
              <li className="menu_mobile_lv2-content-item" id="STORE-mobile">
                <Link to="/store">STORE</Link>
              </li>
              <li className="menu_mobile_lv2-content-item" id="FEEDBACK-mobile">
                <Link to="">FEEDBACK</Link>
              </li>
              <li className="menu_mobile_lv2-content-item" id="NEWS-mobile">
                <Link to="">NEWS</Link>
              </li>
              <li className="menu_mobile_lv2-content-item" id="DESIGN-mobile">
                <Link to="">DESIGN</Link>
              </li>
            </ul>
            <ul
              className={
                this.state.MODELS_mobile_lv2_content_detail
                  ? "MODELS-mobile_lv2-content-detail MODELS-mobile_transform_x"
                  : "MODELS-mobile_lv2-content-detail"
              }
            >
              <div className="back-mobile" onClick={this.back_mobileclick}>
                <i className="far fa-arrow-alt-circle-left"></i>
              </div>
              <li className="MODELS-mobile_item">
                <Link id="REVUELTO-mobile" to="/modeldetail">
                  REVUELTO
                </Link>
              </li>
              <li className="MODELS-mobile_item HURACÁN-mobile">
                <Link
                  id="HURACÁN-mobile"
                  onClick={this.handleHURACANToggleClick}
                >
                  HURACÁN
                </Link>
                <ul
                  className={
                    this.state.isHURACANMobileHeightActive
                      ? "HURACÁN-ITEM-MOBILE HURACÁN-mobile_height"
                      : "HURACÁN-ITEM-MOBILE"
                  }
                >
                  <li className="HURACÁN-STERRATO-MOBILE">
                    <Link to="">HURACÁN STERRATO</Link>
                  </li>
                  <li className="HURACÁN-TECNICA-MOBILE">
                    <Link to="">HURACÁN TECNICA</Link>
                  </li>
                  <li className="HURACÁN-STO-MOBILE">
                    <Link to="">HURACÁN STO</Link>
                  </li>
                  <li className="HURACÁN-EVO-SPYDER-MOBILE">
                    <Link to="">HURACÁN EVO SPYDER</Link>
                  </li>
                </ul>
              </li>
              <li className="MODELS-mobile_item URUS-mobile">
                <Link id="URUS-mobile" onClick={this.handleURUSToggleClick}>
                  URUS
                </Link>
                <ul
                  className={
                    this.state.isURUSMobileHeightActive
                      ? "URUS-ITEM-MOBILE URUS-mobile_height"
                      : "URUS-ITEM-MOBILE"
                  }
                >
                  <li className="URUS S">
                    <Link to="">URUS S</Link>
                  </li>
                  <li className="URUS PERFORMANTE">
                    <Link to="">URUS PERFORMANTE</Link>
                  </li>
                </ul>
              </li>
              <li className="MODELS-mobile_item">
                <Link id="PRE-OWNED-mobile" to="">
                  PRE-OWNED
                </Link>
              </li>
              <li className="MODELS-mobile_item LIMITED-mobile">
                <Link
                  id="LIMITED-mobile"
                  to=""
                  onClick={this.handleLIMITEDToggleClick}
                >
                  LIMITED SERIES
                </Link>
                <ul
                  className={
                    this.state.isLIMITEDMobileHeightActive
                      ? "LIMITED-ITEM-MOBILE LIMITED-mobile_height"
                      : "LIMITED-ITEM-MOBILE LIMITED-mobile_height"
                  }
                >
                  <li>
                    <Link to="">COUNTACH LPI 800-4</Link>
                  </li>
                  <li>
                    <Link to="">SIÁN FKP 37</Link>
                  </li>
                  <li>
                    <Link to="">SIÁN ROADSTER</Link>
                  </li>
                </ul>
              </li>
              <li className="MODELS-mobile_item CONCEPT-mobile">
                <Link
                  id="CONCEPT-mobile"
                  onClick={this.handleCONCEPTToggleClick}
                >
                  CONCEPT
                </Link>
                <ul
                  className={
                    this.state.isCONCEPTMobileHeightActive
                      ? "CONCEPT-ITEM-MOBILE CONCEPT-mobile_height"
                      : "CONCEPT-ITEM-MOBILE"
                  }
                >
                  <li>
                    <Link to="">TERZO MILLENNIO</Link>
                  </li>
                  <li>
                    <Link to="">ASTERION</Link>
                  </li>
                  <li>
                    <Link to="">ESTOQUE</Link>
                  </li>
                </ul>
              </li>
              <li className="MODEL_mobile_edit_li">
                <Link id="MODEL_mobile_edit" to="/">
                  OVERVIEW
                </Link>
              </li>
            </ul>
            <ul
              className={
                this.state.OWNERSHIP_mobile_lv2_content_detail
                  ? "OWNERSHIP-mobile_lv2-content-detail OWNERSHIP-mobile_transform_x"
                  : "OWNERSHIP-mobile_lv2-content-detail"
              }
            >
              <div className="back-mobile" onClick={this.back_mobileclick}>
                <i className="far fa-arrow-alt-circle-left"></i>
              </div>
              <li>
                <Link to="/connect">CONNECTIVITY</Link>
              </li>
              <li>
                <Link to="/customerapp">CUSTOMER</Link>
              </li>
              <li>
                <Link to="/mobilityprogram">MOBILITY PROGRAM</Link>
              </li>
              <li>
                <Link to="/classics">CLASSICS</Link>
              </li>
              <li>
                <Link to="/service">SERVICE</Link>
              </li>
              <li>
                <Link to="/campaign">RECALL CAMPAIGN</Link>
              </li>
              <li>
                <Link id="MODEL_mobile_edit" to="/ownership">
                  OVERVIEW
                </Link>
              </li>
            </ul>
            <ul
              className={
                this.state.MOTOSPORT_mobile_lv2_content_detail
                  ? "MOTOSPORT-mobile_lv2-content-detail MOTOSPORT-mobile_transform_x"
                  : "MOTOSPORT-mobile_lv2-content-detail"
              }
            >
              <div class="back-mobile" onClick={this.back_mobileclick}>
                <i class="far fa-arrow-alt-circle-left"></i>
              </div>
              <li>
                <Link to="/motorsportsc">SC63</Link>
              </li>
              <li>
                <Link to="/motorsporttrofeo">SUPER TROFEO</Link>
              </li>
              <li>
                <Link to="/motorsportmodels">MOTOSPORT MODELS</Link>
              </li>
              <li>
                <Link to="/motorsportdriver">DRIVERS</Link>
              </li>
              <li>
                <Link to="/motorsportexperience">EXPERIENCE</Link>
              </li>
              <li>
                <Link to="/motorsportesports">ESPORTS</Link>
              </li>
              <li>
                <Link id="MODEL_mobile_edit" to="/motorsport">
                  OVERVIEW
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
export default Menubar;
