import React from "react";
import styled from "styled-components";

const LogoSVG = styled.svg`
  width: auto;
  height: ${({ height }) => height || 47}px;
  width: ${({ width }) => width || 42}px;
  margin: 5px;
`;

const LogoLines = styled.g`
  stroke: ${props => props.color};
  stroke-width: 4;
`;

export const Logo = props => (
  <LogoSVG
    version="1.1"
    viewBox="0 0 153 172"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <LogoLines color={props.color}>
        <path
          d="M111.833871,23.4843653 L101.4672,12.8470591 L95.5597821,7.03995821 C95.5597821,7.03995821 92.9746356,4.76596491 91.512107,3.729368 C90.0495783,2.6927711 87.9342342,1.6351962 87.9342342,1.6351962 C87.9342342,1.6351962 86.204386,1.11774623 85.1919197,0.852953567 C84.1794533,0.5881609 77.5826443,0.0429782064 75.8136915,0.20168992 C74.0447387,0.360401634 70.8361452,0.852953567 70.8361452,0.852953567 L65.9783142,1.96278698 C65.9783142,1.96278698 63.838228,2.78517259 63.0142866,3.13237633 C62.1903452,3.47958007 60.4981642,4.27208771 60.4981642,4.27208771 C60.4981642,4.27208771 58.6513049,5.42787635 57.7085503,6.17160668 C56.7657958,6.91533701 55.7432236,8.02321631 55.7432236,8.02321631 C55.7432236,8.02321631 54.6474804,9.19545352 54.0437635,9.97064461 C53.4400465,10.7458357 53.0591938,11.3274439 53.0591938,11.3274439 C53.0591938,11.3274439 52.2580154,12.6602892 51.855831,13.3897788 C51.4536466,14.1192683 50.3789766,16.2661932 50.3789766,16.2661932 C50.3789766,16.2661932 49.7116792,18.1671513 49.5038036,18.8169758 C49.2959279,19.4668003 48.4692297,22.2361099 48.4692297,22.2361099 L47.3240362,29.0201063 C47.3240362,29.0201063 47.1295869,31.7429496 47.1091301,32.6563283 C47.0886734,33.5697069 47.3240362,36.5236137 47.3240362,36.5236137 L48.1494468,41.1098846 L50.130432,47.4979047 L52.7717457,53.0669478 L56.0733878,58.3084002 L61.6861794,65.5153973 C61.6861794,65.5153973 64.3791034,68.6993913 65.7504956,70.1039879 C67.1218878,71.5085846 71.9212699,75.9983021 71.9212699,75.9983021 L78.5245542,81.5673453 L83.9722636,86.4812069 L86.4720134,88.6727983 L87.9921248,90.4985903 L88.7121775,92.9594404 L88.6321717,94.5470856 C88.6321717,94.5470856 88.5554143,95.1560057 88.3943032,95.3404542 C88.2331921,95.5249027 87.5738285,95.9917179 87.5738285,95.9917179 L85.7687843,96.2630777 L82.213394,95.3404542 L79.1914801,93.753263 C79.1914801,93.753263 77.152231,92.7080966 76.0712516,92.029864 C74.9902722,91.3516315 73.7510816,90.3398257 73.7510816,90.3398257 L71.4884315,88.5071612 L69.8307945,87.1645353 C69.8307945,87.1645353 68.4313387,85.9840935 67.827738,85.4086836 C67.2241373,84.8332737 65.0381241,82.5865412 65.0381241,82.5865412 L60.950144,78.273722 L54.3096576,72.1612878 L51.0294173,69.7004377 L47.1091301,67.3983521 L43.1088371,65.7313246 L39.1885499,64.5405907 L35.5882862,63.5880036 L31.107958,62.9529455 L25.1875244,62.5560341 L18.9470673,62.4766519 L14.4667391,62.4766519 C14.4667391,62.4766519 12.1834305,62.2217757 11.0508904,62.0174643 C9.91835034,61.813153 8.30628782,61.3653002 8.30628782,61.3653002 L1.74580726,59.777655 L1.98582484,64.5405907 L2.46586001,69.0653796 L2.70587759,72.3200523 L2.30584828,77.2417526 L1.58579554,81.7665415 L0.945748658,85.9365909 L0.385707635,90.9376734 L0.225695914,97.1294898 L0.625725216,103.083159 L1.6658014,111.656444 L4.3059948,122.134902 L6.62616475,128.644248 C6.62616475,128.644248 7.68400142,131.502098 8.30628782,132.842386 C8.92857421,134.182674 9.90640502,135.709269 9.90640502,135.709269 L13.6217111,141.688717 L17.5599895,146.953098 L22.0672958,151.744486 L26.7076357,155.951746 L30.3879053,158.491978 L37.1884034,162.699238 L41.9087492,164.842559 L48.4692297,167.303409 L52.5495286,168.573525 L59.2700209,170.161171 L63.8303549,170.954993 L70.5508472,171.510669 L78.151404,171.828198 L85.4405944,171.828198 L92.3924471,171.431287 L100.153016,170.558082 L106.63349,169.367348 L112.313906,167.859085 L118.634369,165.23947 L123.914756,162.540473 L129.035131,159.206418 L134.155506,154.840394 L138.555829,150.712516 L142.716133,145.711434 L145.756356,140.630969 L148.476555,134.915446 L151.036743,127.374132 L151.916807,118.959612 L151.596784,111.89459 L150.236684,103.162542 L148.156532,95.7006091 L145.596344,89.0324991 L142.876145,83.8726521 L138.875852,78.8715696 L134.155506,74.426163 L130.075207,71.092108 L122.794674,66.0910255 C122.794674,66.0910255 118.946014,63.6317616 116.263697,62.0174643 C113.581381,60.403167 113.146615,60.3318681 110.515338,58.9879144 C107.884061,57.6439607 105.433402,56.4857718 105.433402,56.4857718 L98.9529277,53.0723346 L93.7525467,50.0558086 L88.9521951,46.6423714 L85.1919197,43.3876986 C85.1919197,43.3876986 84.2301288,42.3114748 83.9118259,41.6654754 C83.593523,41.019476 83.4317907,39.8154969 83.4317907,39.8154969 C83.4317907,39.8154969 83.3490883,39.0091818 83.4317907,38.626245 C83.5144932,38.2433083 83.9118259,37.5927935 83.9118259,37.5927935 C83.9118259,37.5927935 84.7711332,36.7938558 85.7687843,36.1840064 C86.7664353,35.574157 87.9921248,35.098567 87.9921248,35.098567 L111.531689,24.5155327 C111.872352,24.0043157 111.833871,23.4843653 111.833871,23.4843653 Z"
          id="Path"
        />
        <path
          d="M85.8177587,8.79654229 C85.8177587,8.79654229 88.3252994,10.777512 89.4030929,11.707133 C90.4808864,12.6367541 94.2921851,16.0877191 94.2921851,16.0877191 C94.2921851,16.0877191 93.8484621,16.8856603 93.6403062,17.4107149 C93.4321502,17.9357696 93.2548471,18.7043108 93.2548471,18.7043108 C93.2548471,18.7043108 92.8995346,20.203706 92.8995346,20.9093038 C92.8995346,21.6149015 93.2548471,23.7904946 93.2548471,23.7904946 L93.877353,25.8190882 L84.3065847,29.7880755 C84.3065847,29.7880755 83.846505,28.2658915 83.6547058,27.436083 C83.4629065,26.6062745 83.0676754,24.4280052 83.0676754,24.4280052 C83.0676754,24.4280052 82.7895353,22.1699317 82.7657799,21.0857032 C82.7420246,20.0014747 82.9318464,18.2285737 82.9318464,18.2285737 C82.9318464,18.2285737 83.3046485,16.001569 83.5065515,14.9999226 C83.7084545,13.9982761 83.9505636,13.1746894 83.9505636,13.1746894 C83.9505636,13.1746894 84.4727724,11.4802615 84.8399402,10.6193365 C85.2071081,9.75841153 85.8177587,8.79654229 85.8177587,8.79654229 Z"
          id="Path-2"
        />
        <path
          d="M77.975821,7.08835313 C77.975821,7.08835313 77.4114931,7.86842032 77.1429744,8.35283073 C76.8744558,8.83724114 76.2914059,10.4651583 76.2914059,10.4651583 C76.2914059,10.4651583 75.9200199,12.085903 75.8088512,12.9024593 C75.6976825,13.7190156 75.4725901,15.7577577 75.4725901,15.7577577 C75.4725901,15.7577577 75.3586242,17.7774988 75.3088269,19.0444579 C75.2590296,20.3114169 75.3088269,22.424182 75.3088269,22.424182 C75.3088269,22.424182 75.2484644,24.5672484 75.3088269,25.4789326 C75.3691894,26.3906167 75.8088512,29.9762965 75.8088512,29.9762965 L76.4224165,32.7583383 C76.4224165,32.7583383 76.7403474,33.7073561 76.9272872,34.1232269 C77.114227,34.5390976 77.416603,34.9700297 77.416603,34.9700297 C77.416603,34.9700297 77.0829177,35.8485388 76.9272872,36.4955332 C76.7716568,37.1425276 76.6648287,37.2617132 76.6476782,37.6053401 C76.6387297,37.7846325 76.6101022,38.3807931 76.6476782,39.1603156 C76.6852543,39.9398382 76.7826955,40.785183 76.7826955,40.785183 L77.7325219,42.7675211 L79.2340615,45.0265824 C79.2340615,45.0265824 80.2475171,46.2241882 80.7130116,46.6672028 C81.1785061,47.1102173 82.6781697,48.3557378 82.6781697,48.3557378 L86.051691,51.184334 C86.051691,51.184334 87.8405288,52.46202 88.6391491,53.0041854 C89.4377695,53.5463508 92.864239,55.7077581 92.864239,55.7077581 L99.9251279,59.7997095 L107.264864,63.8224389 L114.185187,67.7064536 L120.266683,71.4517534 L125.858863,75.335768 L131.101532,79.8439993 L135.645178,84.9764472 C135.645178,84.9764472 136.972668,86.7312147 137.571585,87.6463573 C138.170502,88.5614998 139.140291,90.3169674 139.140291,90.3169674 C139.140291,90.3169674 139.761073,91.5821478 139.962527,92.0334991 C140.163982,92.4848504 141.307261,95.1719857 141.307261,95.1719857 C141.307261,95.1719857 141.892366,97.0966416 142.124201,98.0455083 C142.356037,98.994375 142.549986,100.255328 142.549986,100.255328 L142.84511,104.327163 L139.140291,103.356159 L128.515149,99.4027873 L119.917172,96.4897763 L110.899781,93.7154802 L105.517308,92.3976895 L101.742586,91.634758 L98.2684237,91.2860601 L95.5212861,91.0798988 L93.3882811,88.0038281 L89.9165019,84.0066544 L86.2482068,80.2369622 L82.0301516,75.9599847 L76.7826955,70.9102236 L72.2628319,66.360595 C72.2628319,66.360595 70.498073,64.4712326 69.6426211,63.5333258 C68.7871693,62.595419 66.7215585,60.2852113 66.7215585,60.2852113 C66.7215585,60.2852113 64.7865191,58.0514214 63.7798996,56.806375 C62.7732801,55.5613286 61.6186942,53.9736875 61.6186942,53.9736875 C61.6186942,53.9736875 60.3027967,52.0782241 59.6530676,51.0543446 C59.0033385,50.0304652 58.0536794,48.3557378 58.0536794,48.3557378 C58.0536794,48.3557378 57.3290247,47.1487319 56.934599,46.407224 C56.5401732,45.6657161 55.3973938,43.3620046 55.3973938,43.3620046 C55.3973938,43.3620046 54.8093872,41.6617993 54.4781514,40.5252042 C54.1469156,39.3886091 53.7197398,37.6053401 53.7197398,37.6053401 C53.7197398,37.6053401 53.5474047,36.6130702 53.4401308,35.9105809 C53.3328569,35.2080917 53.0207173,33.0277514 53.0207173,33.0277514 C53.0207173,33.0277514 52.9476506,31.2347542 53.0207173,30.2560426 C53.093784,29.2773309 53.4401308,27.4098017 53.4401308,27.4098017 C53.4401308,27.4098017 53.9351499,25.1517091 54.3143882,23.9190599 C54.6936265,22.6864107 55.4672961,20.8208483 55.4672961,20.8208483 C55.4672961,20.8208483 56.7741206,18.413162 57.556899,17.0946171 C58.3396774,15.7760722 58.4730929,15.7577577 58.4730929,15.7577577 C58.4730929,15.7577577 59.4667873,14.3505495 60.1771098,13.5199089 C60.8874323,12.6892683 62.387619,11.1801691 62.387619,11.1801691 C62.387619,11.1801691 63.8222561,10.3430857 64.6969733,9.88020604 C65.5716905,9.41732642 66.9241525,8.90528563 66.9241525,8.90528563 C66.9241525,8.90528563 68.8068299,8.38428121 69.6426211,8.190344 C70.4784124,7.99640678 72.6632499,7.57358403 72.6632499,7.57358403 L77.975821,7.08835313 Z"
          id="Path-3"
        />
        <path
          d="M144.132259,115.815592 C144.132259,115.815592 144.541265,115.952623 144.66129,116.209082 C144.781315,116.465541 144.92019,117.705711 144.92019,117.705711 C144.92019,117.705711 144.878878,118.694858 144.832061,119.203978 C144.785243,119.713097 144.66129,120.521123 144.66129,120.521123 C144.66129,120.521123 144.512124,121.224655 144.391415,121.652359 C144.270706,122.080064 144.132259,122.395618 144.132259,122.395618 C144.132259,122.395618 143.754988,123.153782 143.598253,123.313761 C143.441518,123.473741 143.025414,123.554227 143.025414,123.554227 C143.025414,123.554227 142.303909,123.578258 142.166155,123.466785 C142.0284,123.355312 141.813638,122.636084 141.813638,122.636084 C141.813638,122.636084 141.798506,121.980581 141.813638,121.652359 C141.828771,121.324138 141.919949,120.330248 141.919949,120.330248 C141.919949,120.330248 142.079233,119.437693 142.166155,119.072814 C142.253076,118.707936 142.545167,117.705711 142.545167,117.705711 C142.545167,117.705711 142.949332,116.553346 143.201672,116.209082 C143.454012,115.864819 144.132259,115.815592 144.132259,115.815592 Z"
          id="Path-4"
        />
        <path
          d="M140.13277,129.941781 C140.13277,129.941781 140.607644,130.280664 140.702782,130.601611 C140.79792,130.922558 140.799852,131.812886 140.799852,131.812886 C140.799852,131.812886 140.597207,133.024917 140.409922,133.703178 C140.222638,134.381439 139.599526,136.159925 139.599526,136.159925 C139.599526,136.159925 138.871409,138.322234 138.331507,139.532902 C137.791605,140.743569 136.598713,142.888903 136.598713,142.888903 C136.598713,142.888903 135.737815,144.35041 135.216422,145.104848 C134.695029,145.859287 133.834936,147.067919 133.834936,147.067919 C133.834936,147.067919 133.143267,147.915467 132.755759,148.356803 C132.36825,148.798139 131.097023,150.042267 131.097023,150.042267 C131.097023,150.042267 130.003237,151.138421 129.398319,151.628587 C128.793401,152.118753 127.356207,153.190789 127.356207,153.190789 C127.356207,153.190789 126.449925,153.854133 125.92097,154.186527 C125.392015,154.518921 123.755231,155.453631 123.755231,155.453631 C123.755231,155.453631 122.58831,156.063979 121.924018,156.387545 C121.259725,156.71111 120.454337,157.06144 120.454337,157.06144 C120.454337,157.06144 118.877098,157.784575 118.066959,158.112667 C117.25682,158.440759 114.572742,159.443379 114.572742,159.443379 L111.151815,160.455703 C111.151815,160.455703 110.749566,160.507109 110.552689,160.455703 C110.355811,160.404298 110.011506,160.157961 110.011506,160.157961 C110.011506,160.157961 109.738662,159.845315 109.70606,159.683574 C109.673457,159.521833 109.831457,159.264734 109.831457,159.264734 C109.831457,159.264734 110.133601,158.934646 110.292887,158.826511 C110.452173,158.718375 110.971766,158.490604 110.971766,158.490604 C110.971766,158.490604 112.253787,158.009417 112.919839,157.734906 C113.58589,157.460395 114.872824,156.882795 114.872824,156.882795 C114.872824,156.882795 116.684275,155.938536 117.561964,155.453631 C118.439653,154.968727 120.154255,153.96492 120.154255,153.96492 C120.154255,153.96492 122.03905,152.715361 122.994781,152.015439 C123.950511,151.315517 125.195622,150.272914 125.195622,150.272914 C125.195622,150.272914 127.098965,148.603773 127.993993,147.738492 C128.88902,146.873212 129.876891,145.74723 129.876891,145.74723 C129.876891,145.74723 131.19585,144.109903 131.820104,143.326902 C132.444359,142.543901 133.057753,141.757482 133.057753,141.757482 C133.057753,141.757482 133.965229,140.420946 134.361405,139.792099 C134.757581,139.163252 135.216422,138.331047 135.216422,138.331047 L137.520218,134.112849 L138.699282,131.634241 C138.699282,131.634241 139.159001,130.766568 139.599526,130.295261 C140.040051,129.823954 140.13277,129.941781 140.13277,129.941781 Z"
          id="Path-5"
        />
        <path
          d="M108.709971,135.037965 C108.904392,134.999384 109.24816,134.895251 109.539679,135.037965 C109.831198,135.18068 109.941248,135.554972 110.18999,135.940989 C110.438732,136.327007 110.885151,137.342723 110.885151,137.342723 C110.885151,137.342723 111.150394,138.105679 111.186467,138.432961 C111.222539,138.760243 111.186467,140.076532 111.186467,140.076532 C111.186467,140.076532 111.027918,140.844156 110.885151,141.23643 C110.742384,141.628704 110.498801,141.965995 110.498801,141.965995 C110.498801,141.965995 110.159775,142.258212 110.033018,142.282168 C109.906261,142.306124 109.915647,142.455151 109.539679,142.12642 C109.163711,141.797689 108.822093,138.432961 108.822093,138.432961 C108.822093,138.432961 108.662975,137.214933 108.575423,136.808729 C108.487872,136.402526 108.515549,135.076547 108.709971,135.037965 Z"
          id="Path-6"
        />
        <path
          d="M101.053191,110.305648 C101.053191,110.305648 101.470286,110.230897 101.818651,110.305648 C102.167016,110.380399 102.653698,110.788962 102.653698,110.788962 C102.653698,110.788962 103.167047,111.507365 103.355329,111.84765 C103.543611,112.187934 104.503397,114.131952 104.503397,114.131952 C104.503397,114.131952 105.028924,115.448665 105.182034,115.921296 C105.335145,116.393926 105.877907,118.660075 105.877907,118.660075 C105.877907,118.660075 106.172867,120.130139 106.225843,120.708405 C106.278819,121.286672 106.319743,123.482932 106.319743,123.482932 C106.319743,123.482932 106.366525,124.359523 106.319743,124.736021 C106.272961,125.11252 106.061641,125.706195 106.061641,125.706195 C106.061641,125.706195 105.942118,125.96758 105.877907,126.002166 C105.813695,126.036752 105.512148,126.002166 105.512148,126.002166 C105.512148,126.002166 105.200914,125.544326 105.072554,125.270027 C104.944193,124.995727 104.571938,123.992985 104.571938,123.992985 C104.571938,123.992985 104.177987,122.325145 103.942168,121.531445 C103.706349,120.737745 102.953081,118.660075 102.953081,118.660075 C102.953081,118.660075 102.567432,117.406347 102.372189,116.858218 C102.176946,116.310089 101.521848,114.642005 101.521848,114.642005 L100.665081,112.669799 C100.665081,112.669799 100.443315,112.153097 100.390915,111.84765 C100.338516,111.542202 100.390915,111.071631 100.390915,111.071631 C100.390915,111.071631 100.438712,110.710219 100.542885,110.535797 C100.647058,110.361375 101.053191,110.305648 101.053191,110.305648 Z"
          id="Path-7"
        />
        <path
          d="M19.5147701,70.736196 C19.5147701,70.736196 22.7806474,69.5324703 24.5935018,69.1236693 C26.4063562,68.7148684 29.2659349,68.4786587 29.2659349,68.4786587 C29.2659349,68.4786587 31.4857099,68.4492867 32.4866369,68.4786587 C33.4875639,68.5080306 36.3761593,68.8817903 36.3761593,68.8817903 C36.3761593,68.8817903 38.6228441,69.4792211 39.9109565,69.8896195 C41.1990689,70.300018 43.6082732,71.3812067 43.6082732,71.3812067 C43.6082732,71.3812067 45.1794763,72.1507872 46.0054345,72.6309149 C46.8313927,73.1110426 48.8055738,74.4023861 48.8055738,74.4023861 C48.8055738,74.4023861 50.148135,75.3960398 51.0029065,76.0978473 C51.8576779,76.7996548 53.6438469,78.2747584 53.6438469,78.2747584 L57.6745612,82.2342605 L60.8673967,85.8536339 L65.4792702,91.9141053 L60.8673967,88.6581575 C60.8673967,88.6581575 57.6867533,86.4039553 56.3254173,85.4505022 C54.9640813,84.4970491 51.8210295,82.3222591 51.8210295,82.3222591 C51.8210295,82.3222591 49.3093964,80.8174799 48.2400764,80.1898549 C47.1707565,79.5622298 45.5240484,78.6263184 45.5240484,78.6263184 C45.5240484,78.6263184 42.3125611,76.8686403 40.7235536,76.0978473 C39.1345461,75.3270543 36.7418279,74.4023861 36.7418279,74.4023861 L32.4866369,72.9064101 L26.9878647,71.5864312 C26.9878647,71.5864312 24.9337507,71.1852414 23.8215346,71.0587014 C22.7093184,70.9321614 19.5147701,70.736196 19.5147701,70.736196 Z"
          id="Path-8"
        />
        <path
          d="M9.09801318,73.8828655 C9.09801318,73.8828655 13.176181,74.2154163 15.2687012,74.516237 C17.3612215,74.8170576 22.2095094,75.7677738 22.2095094,75.7677738 C22.2095094,75.7677738 25.8686342,76.8400432 27.6951903,77.4719706 C29.5217464,78.1038981 32.291289,79.1085018 32.291289,79.1085018 L38.1861199,81.7286807 C38.1861199,81.7286807 40.5623534,82.9898514 42.0367205,83.8056856 C43.5110875,84.6215199 45.0521013,85.5279401 45.0521013,85.5279401 C45.0521013,85.5279401 46.088842,86.1715182 46.5902627,86.5080707 C47.0916834,86.8446232 51.7860445,90.0477486 51.7860445,90.0477486 C51.7860445,90.0477486 54.2414617,91.9869143 55.6122342,93.0951343 C56.9830067,94.2033543 58.9161021,95.8121422 58.9161021,95.8121422 L63.1872858,99.6399731 L66.6403312,103.083139 C66.6403312,103.083139 65.1335204,102.305604 64.0384151,101.751211 C62.9433099,101.196818 60.7260536,100.089057 60.7260536,100.089057 L60.5062282,99.9777713 L54.2287495,96.9912227 L47.6268443,93.978017 L41.4870725,91.2268291 L35.6113769,88.4756413 L29.7356813,85.658949 L22.9357189,82.4492299 L16.8619662,79.1085018 C16.8619662,79.1085018 14.0128835,77.5468735 12.8429825,76.7119248 C11.6730814,75.8769761 9.09801318,73.8828655 9.09801318,73.8828655 Z"
          id="Path-9"
        />
        <path
          d="M13.1109917,83.5149254 L22.8591625,87.6885414 L35.8789798,94.3133288 L43.7576385,98.7519364 L55.3655876,105.400353 C55.3655876,105.400353 57.7438205,106.807035 58.8077562,107.414528 C59.871692,108.02202 62.3192242,109.351596 62.3192242,109.351596 C62.3192242,109.351596 64.2444311,110.271035 64.9860077,110.567148 C65.7275843,110.863261 67.7942243,111.537776 67.7942243,111.537776 C67.7942243,111.537776 70.8760058,112.609763 72.5764309,113.106759 C74.2768559,113.603755 76.4073342,114.055195 76.4073342,114.055195 L80.8729399,114.85017 C80.8729399,114.85017 83.550812,115.244797 84.4474997,115.313905 C85.3441874,115.383013 86.8899563,115.313905 86.8899563,115.313905 C86.8899563,115.313905 89.9998537,115.400747 91.2877066,115.313905 C92.5755596,115.227063 93.7670905,114.85017 93.7670905,114.85017 L96.9052003,120.15 L95.3477004,120.550447 L90.1844475,121.075884 L81.4907651,121.469961 C81.4907651,121.469961 78.5450293,121.545272 77.4749016,121.469961 C76.404774,121.394651 71.2525198,120.900738 71.2525198,120.900738 L62.1175338,119.455787 C62.1175338,119.455787 59.2330678,118.843322 57.7044971,118.404913 C56.1759263,117.966505 53.1051996,116.970102 53.1051996,116.970102 L47.5103822,114.85017 L40.0523501,111.136371 L33.6756261,107.099169 L28.8873672,103.211034 C28.8873672,103.211034 26.5251156,101.037917 25.4010681,99.8832674 C24.2770207,98.7286182 23.1945498,97.6063747 23.1945498,97.6063747 C23.1945498,97.6063747 21.5898699,95.909855 20.8556403,95.0229773 C20.1214107,94.1360996 18.2521503,91.6634139 18.2521503,91.6634139 C18.2521503,91.6634139 16.1547854,88.7761906 15.6482569,87.9733673 C15.1417284,87.1705441 13.1109917,83.5149254 13.1109917,83.5149254 Z"
          id="Path-10"
        />
        <path
          d="M10.1846896,90.3786609 L14.1496534,95.9141334 C14.1496534,95.9141334 16.495699,98.7933881 17.7290416,100.191936 C18.9623841,101.590484 22.2724303,104.909276 22.2724303,104.909276 L27.0377896,109.406848 L34.8250841,115.345948 L41.6244382,119.382231 L49.7023034,123.245529 L56.9665706,125.72496 C56.9665706,125.72496 59.8605602,126.651168 61.1930409,127.003726 C62.5255216,127.356285 65.6836913,128.031406 65.6836913,128.031406 C65.6836913,128.031406 67.7910552,128.472861 68.6271548,128.603848 C69.4632544,128.734834 72.308703,129.069308 72.308703,129.069308 C72.308703,129.069308 75.8880304,129.53521 77.3199547,129.645919 C78.7518789,129.756628 81.2582803,129.761242 81.2582803,129.761242 C81.2582803,129.761242 84.5320366,129.783502 86.0127545,129.761242 C87.4934725,129.738981 88.9293465,129.645919 88.9293465,129.645919 C88.9293465,129.645919 92.4038373,129.556676 93.9975435,129.423422 C95.5912498,129.290168 99.273663,128.781002 99.273663,128.781002 L100.087261,131.952366 L100.723647,135.589743 L101.133315,139.448319 L98.5762934,140.02493 C98.5762934,140.02493 97.0759974,140.389919 96.1215761,140.546217 C95.1671548,140.702515 92.5905371,141.00517 92.5905371,141.00517 C92.5905371,141.00517 90.1627372,141.29965 88.9293465,141.404819 C87.6959557,141.509987 85.1519275,141.639443 85.1519275,141.639443 L82.630036,141.639443 L78.0620027,141.639443 L72.5411596,141.178154 L64.9863216,139.909608 L57.8382827,138.122112 C57.8382827,138.122112 55.5967833,137.4966 54.38827,137.072783 C53.1797566,136.648965 51.0970427,135.758004 51.0970427,135.758004 C51.0970427,135.758004 49.4609483,135.127488 48.5275135,134.692114 C47.5940787,134.25674 44.2976885,132.586639 44.2976885,132.586639 C44.2976885,132.586639 41.8758083,131.344815 40.2673869,130.399106 C38.6589655,129.453396 38.0213616,128.896324 38.0213616,128.896324 C38.0213616,128.896324 36.1879159,127.692242 35.2326431,127.003726 C34.2773703,126.31521 31.861263,124.456414 31.861263,124.456414 L25.8173927,118.805619 L21.749403,114.077403 L19.3086092,110.617732 L16.3447882,106.004839 L13.7877661,100.757672 L11.8118854,95.9141334 L10.1846896,90.3786609 Z"
          id="Path-11"
        />
        <path
          d="M4.21642903,87.8608881 L5.88708208,94.4914132 C5.88708208,94.4914132 7.03906848,98.3057467 7.55773513,99.7285306 C8.07640178,101.151314 9.94438234,105.621223 9.94438234,105.621223 L13.8425728,113.672575 L18.9340868,121.329253 L23.3891616,126.775756 L26.8895776,130.327823 L32.6970858,135.458587 L38.9819234,139.800002 L44.5507669,142.72059 L52.0289282,145.877983 L59.6423672,148.270045 C59.6423672,148.270045 62.4253779,148.80719 63.8987569,149.114311 C65.3721358,149.421432 68.8945685,149.982594 68.8945685,149.982594 L77.7251632,150.693007 L86.7191589,150.693007 C86.7191589,150.693007 91.969313,150.388919 93.1293843,150.298333 C94.2894556,150.207748 93.7952545,150.140464 93.7952545,150.140464 C93.7952545,150.140464 97.4755791,149.859008 99.0267915,149.643862 C100.578004,149.428716 100.9755,149.114311 100.9755,149.114311 L101.618714,151.327403 L101.8303,152.429574 C101.8303,152.429574 102.10662,153.363414 102.124565,154.250074 C102.14251,155.136735 102.124565,155.75788 102.124565,156.710003 C102.124565,157.662126 101.909855,159.139034 101.909855,159.139034 L101.232034,162.417037 L95.6250173,163.085775 C95.6250173,163.085775 92.7629069,163.375908 91.1827951,163.466607 C89.6026833,163.557306 85.9988736,163.638319 85.9988736,163.638319 C85.9988736,163.638319 82.6892558,163.702954 80.9021592,163.717253 C79.1150626,163.731553 76.1340651,163.717253 76.1340651,163.717253 L68.1785744,163.085775 L60.7004131,161.901752 L53.7791362,160.165186 L46.5396396,157.718207 L39.5388078,154.481879 C39.5388078,154.481879 37.2238801,153.216903 36.0111509,152.429574 C34.7984218,151.642244 33.069104,150.445384 33.069104,150.445384 L29.1966699,147.45668 C29.1966699,147.45668 27.1638917,145.696897 25.961912,144.541555 C24.7599322,143.386214 24.1051558,142.562721 24.1051558,142.562721 C24.1051558,142.562721 23.1020874,141.491025 21.9289937,140.113684 C20.7559,138.736343 19.3318614,136.958348 19.3318614,136.958348 C19.3318614,136.958348 17.9574946,135.052505 17.3341114,134.078659 C16.7107282,133.104812 15.4498791,131.192342 15.4498791,131.192342 L12.3425486,125.288513 L9.38749799,118.250795 C9.38749799,118.250795 8.57359801,115.468407 8.21046025,114.136837 C7.84732249,112.805266 7.38404257,111.578511 7.38404257,111.578511 C7.38404257,111.578511 7.02335051,109.608938 6.75596513,108.560998 C6.48857975,107.513058 5.96663698,105.305484 5.96663698,105.305484 L4.93784624,98.8524795 C4.93784624,98.8524795 4.56683788,94.9819568 4.44199564,93.0798468 C4.31715339,91.1777367 4.21642903,87.8608881 4.21642903,87.8608881 Z"
          id="Path-12"
        />
      </LogoLines>
    </g>
  </LogoSVG>
);
