type LogoProp = {
  height?: string,
  width?: string
}

export const Logo = ({ height, width }: LogoProp) => {
  return (
    <>
      <svg width={width ?? 100} height={height ?? 36} viewBox="0 0 361 155" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M95.9671 31.1169L80.5471 124H59.5033L34.1055 75.2001H33.5613L25.3977 124H0.181412L15.6015 31.1169H37.0081L62.043 79.7354H62.7687L70.7508 31.1169H95.9671ZM126.218 125.27C118.659 125.27 112.43 123.773 107.532 120.78C102.664 117.756 99.2477 113.554 97.2824 108.172C95.3171 102.76 94.924 96.4858 96.1032 89.3502C97.2824 82.2147 99.7466 75.956 103.496 70.5741C107.245 65.1619 112.067 60.9592 117.963 57.9659C123.859 54.9424 130.602 53.4306 138.191 53.4306C145.719 53.4306 151.918 54.9424 156.786 57.9659C161.684 60.9592 165.115 65.1619 167.081 70.5741C169.076 75.956 169.484 82.2147 168.305 89.3502C167.126 96.4858 164.647 102.76 160.867 108.172C157.088 113.554 152.25 117.756 146.354 120.78C140.489 123.773 133.776 125.27 126.218 125.27ZM129.302 106.766C131.479 106.766 133.459 106.055 135.243 104.634C137.057 103.213 138.599 101.187 139.869 98.5569C141.169 95.9264 142.121 92.7971 142.726 89.1688C143.331 85.5103 143.422 82.381 142.998 79.7807C142.575 77.1503 141.698 75.1245 140.368 73.7034C139.037 72.2824 137.284 71.5718 135.107 71.5718C132.93 71.5718 130.934 72.2824 129.12 73.7034C127.306 75.1245 125.764 77.1503 124.494 79.7807C123.224 82.381 122.287 85.5103 121.682 89.1688C121.078 92.7971 120.972 95.9264 121.365 98.5569C121.788 101.187 122.665 103.213 123.995 104.634C125.356 106.055 127.125 106.766 129.302 106.766ZM225.813 54.3377L222.729 72.4789H176.832L179.916 54.3377H225.813ZM191.526 37.6477H216.561L205.948 101.596C205.797 102.563 205.827 103.379 206.039 104.045C206.251 104.68 206.674 105.163 207.309 105.496C207.974 105.798 208.851 105.949 209.939 105.949C210.665 105.949 211.557 105.859 212.615 105.677C213.674 105.466 214.475 105.315 215.019 105.224L215.745 122.821C214.475 123.184 212.766 123.592 210.62 124.045C208.503 124.529 206.039 124.847 203.227 124.998C197.362 125.27 192.584 124.65 188.896 123.138C185.237 121.627 182.697 119.268 181.276 116.063C179.885 112.828 179.644 108.792 180.551 103.954L191.526 37.6477ZM256.869 125.27C249.431 125.27 243.263 123.849 238.364 121.007C233.466 118.134 230.02 114.022 228.024 108.671C226.028 103.289 225.666 96.8486 226.936 89.3502C228.145 82.1542 230.639 75.8653 234.419 70.4834C238.228 65.1015 243.021 60.9139 248.796 57.9206C254.601 54.9272 261.102 53.4306 268.298 53.4306C273.558 53.4306 278.169 54.247 282.13 55.8797C286.121 57.5124 289.372 59.8859 291.881 63.0001C294.391 66.1143 296.084 69.8786 296.961 74.293C297.868 78.6771 297.868 83.6357 296.961 89.1688L296.054 94.974H233.829L236.006 81.1867H275.191C275.494 79.1911 275.297 77.4375 274.602 75.9257C273.936 74.3837 272.863 73.1894 271.382 72.3428C269.93 71.466 268.177 71.0276 266.121 71.0276C264.065 71.0276 262.13 71.466 260.315 72.3428C258.532 73.2197 257.005 74.4442 255.735 76.0164C254.495 77.5887 253.664 79.433 253.24 81.5495L250.519 96.0625C250.156 98.2999 250.292 100.295 250.927 102.049C251.562 103.803 252.666 105.178 254.238 106.176C255.81 107.174 257.836 107.673 260.315 107.673C262.009 107.673 263.611 107.446 265.123 106.993C266.665 106.509 268.025 105.813 269.205 104.906C270.414 103.969 271.382 102.835 272.107 101.505H294.965C293.332 106.343 290.747 110.545 287.21 114.113C283.702 117.651 279.379 120.402 274.239 122.367C269.129 124.302 263.339 125.27 256.869 125.27ZM301.371 124L312.982 54.3377H337.291L335.114 67.5808H335.84C337.926 62.6826 340.541 59.0997 343.686 56.8321C346.83 54.5644 350.262 53.4306 353.981 53.4306C355.069 53.4306 356.112 53.5213 357.11 53.7027C358.138 53.8539 359.151 54.0655 360.149 54.3377L356.521 75.7443C355.341 75.2908 353.875 74.9733 352.121 74.7919C350.368 74.5803 348.811 74.4744 347.45 74.4744C345.031 74.4744 342.764 75.0338 340.647 76.1525C338.561 77.241 336.777 78.783 335.295 80.7785C333.844 82.7438 332.877 85.0568 332.393 87.7175L326.406 124H301.371Z" fill="black" />
        <g filter="url(#filter0_d_1_25)">
          <path d="M95.9671 31.1169L80.5471 124H59.5033L34.1055 75.2001H33.5613L25.3977 124H0.181412L15.6015 31.1169H37.0081L62.043 79.7354H62.7687L70.7508 31.1169H95.9671Z" fill="black" />
        </g>
        <defs>
          <filter id="filter0_d_1_25" x="0.181412" y="31.1169" width="95.7857" height="92.8831" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="48" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_25" />
            <feOffset dx="6" dy="-4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="luminosity" in2="BackgroundImageFix" result="effect1_dropShadow_1_25" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_25" result="shape" />
          </filter>
        </defs>
      </svg>

    </>
  )
}