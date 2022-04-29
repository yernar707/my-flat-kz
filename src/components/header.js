import * as React from "react"
import PropTypes from "prop-types"

class Header extends React.Component {
  state = {
    dropdown: false
  }

  render() {
    const { dropdown } = this.state;
    return (
      <header
        style={{
          background: `#FFF`,
          width: `100%`,
          zIndex: 999,
        }}
      > 
      <div className="container header-container">
        <div className="row align-items-center justify-content-between">
          <div className="col-4 row">
            <div className="col-6">
              <div className="country-name">
                <p>
                  <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H19V14H0V0Z" fill="#E30A17"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0829 7.21876C12.0829 9.1496 10.4619 10.7158 8.46099 10.7158C6.46005 10.7158 4.83911 9.1496 4.83911 7.21585C4.83911 5.2821 6.46005 3.72168 8.46099 3.72168C10.4619 3.72168 12.0829 5.28793 12.0829 7.21876Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.2609 7.21871C12.2609 8.76455 10.9665 10.0158 9.36637 10.0158C7.76622 10.0158 6.46887 8.76163 6.46887 7.2158C6.46887 5.66996 7.76622 4.42163 9.36637 4.42163C10.9665 4.42163 12.2639 5.67288 12.2639 7.21871H12.2609Z" fill="#E30A17"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.7864 5.58544L12.7567 6.87752L11.5306 7.20419L12.7419 7.6271L12.7122 8.81419L13.4989 7.88669L14.6924 8.29502L14.0036 7.30044L14.8438 6.31169L13.5524 6.66169L12.7864 5.58252V5.58544Z" fill="white"/>
                  </svg>
                  Турция
                </p>
              </div>
              <div className="country-phone">
                <p>+77777071234</p>
              </div>
              
            </div>
            <div className="col-6">
              <div className="country-name">
                <p>
                  <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H19V14H0V0Z" fill="#00ABC2"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.78724 13.621C1.88521 13.7143 1.85255 13.8689 2.12271 13.8485C2.5324 13.8485 2.54427 13.6035 2.54427 13.4314C2.54427 13.2593 1.92974 13.0202 1.90005 12.7664C1.87037 12.5127 2.04255 12.4456 2.18505 12.4456C2.32458 12.4456 2.42255 12.5243 2.42255 12.5943C2.42255 12.6643 2.35724 12.6877 2.2563 12.6877C2.15537 12.6877 2.30084 12.6381 2.21474 12.6002C2.12865 12.5622 2.07224 12.6585 2.07224 12.7168C2.07224 12.781 2.28599 12.7985 2.42849 12.7547C2.45818 12.8918 2.47005 12.9006 2.27115 13.1339C2.41365 13.0435 2.42552 13.0231 2.58287 13.0756C2.42552 12.9414 2.54427 12.6731 2.54724 12.606C2.55021 12.5389 2.51755 12.4572 2.45818 12.4164C2.3424 12.3143 2.09599 12.3085 1.94755 12.3756C1.73083 12.4689 1.71896 12.7489 1.77537 12.8422L2.37505 13.4372C2.41662 13.5072 2.43443 13.7056 2.17912 13.7143C1.91193 13.7347 1.81693 13.376 1.76943 13.2564C1.70708 13.3877 1.63584 13.7464 1.36568 13.726C1.11037 13.7172 1.06287 13.5218 1.10443 13.4489L1.71896 12.8364C1.77834 12.7431 1.76646 12.4631 1.54974 12.3697C1.4013 12.3027 1.1549 12.3114 1.04208 12.4106C0.976772 12.4514 0.941147 12.5302 0.947085 12.6002C0.953022 12.6702 1.0688 12.9356 0.914429 13.0668C1.0688 13.0172 1.08365 13.0377 1.22615 13.1252C1.02724 12.8947 1.04208 12.886 1.0688 12.746C1.2113 12.7927 1.42505 12.7752 1.42505 12.7139C1.42505 12.6527 1.36568 12.5506 1.27958 12.5914C1.19646 12.6322 1.33896 12.6818 1.23802 12.6818C1.14005 12.6818 1.0688 12.6614 1.0688 12.5943C1.0688 12.5272 1.16677 12.4397 1.30927 12.4397C1.45177 12.4397 1.62099 12.5097 1.5913 12.7635C1.56162 13.0172 0.938179 13.2914 0.938179 13.4635C0.938179 13.6385 0.979741 13.8456 1.38943 13.8456C1.65662 13.866 1.68927 13.7114 1.78724 13.6181V13.621Z" fill="#FFEC2D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75453 10.0129C1.8525 9.91958 1.93265 9.64541 2.19984 9.66291C2.60953 9.66291 2.7639 9.88749 2.7639 10.0596C2.7639 10.2317 1.93265 11.6346 1.90296 11.8883C1.87328 12.1421 2.04546 12.2121 2.185 12.2121C2.3275 12.2121 2.42546 12.1333 2.42546 12.0604C2.42546 11.9875 2.35421 11.9729 2.25625 11.9729C2.15828 11.9729 2.29781 12.0225 2.21468 12.0604C2.13156 12.0983 2.07218 12.0021 2.07218 11.9408C2.07218 11.8796 2.28593 11.8592 2.42843 11.9058C2.45515 11.7687 2.46703 11.76 2.27109 11.5267C2.41359 11.6142 2.42546 11.6375 2.58281 11.585C2.42546 11.7192 2.54125 11.9846 2.54718 12.0517C2.55312 12.1187 2.5175 12.2033 2.45515 12.2442C2.34234 12.3462 2.09296 12.3492 1.94453 12.285C1.73078 12.1887 1.7189 11.9117 1.77531 11.8183L2.58281 10.1092C2.62734 10.0392 2.51453 9.80583 2.25921 9.79708C1.99203 9.77666 1.9 10.0537 1.8525 10.1733L2.21765 10.1442C2.21765 10.1442 2.2325 10.2025 2.21765 10.2375C2.09514 10.2463 1.97322 10.2619 1.8525 10.2842L1.83765 10.465H2.01578L2.0039 10.5467C2.0039 10.5467 1.8525 10.535 1.83765 10.5467C1.82281 10.5554 1.80796 10.7275 1.80796 10.7275C1.80796 10.7275 1.77828 10.7392 1.74859 10.7392C1.7189 10.7392 1.68921 10.7275 1.68921 10.7275C1.68921 10.7275 1.67734 10.5554 1.6625 10.5467C1.64765 10.535 1.49625 10.5467 1.49625 10.5467L1.4814 10.465H1.6625L1.64765 10.2842C1.64765 10.2842 1.46953 10.2492 1.2825 10.2375C1.27062 10.2025 1.2825 10.1471 1.2825 10.1471L1.64765 10.1733C1.60015 10.0537 1.50812 9.77666 1.24093 9.79416C0.98562 9.80583 0.872808 10.0392 0.91437 10.1092L1.72187 11.8183C1.77828 11.9087 1.7664 12.1887 1.55265 12.285C1.40421 12.3492 1.15484 12.3433 1.04203 12.2442C0.979683 12.2033 0.944058 12.1217 0.949995 12.0546C0.955933 11.9875 1.06875 11.7162 0.91437 11.5879C1.07171 11.6375 1.08656 11.6171 1.22609 11.5267C1.03015 11.76 1.04203 11.7687 1.07171 11.9058C1.21125 11.8592 1.425 11.8767 1.425 11.9408C1.425 11.9992 1.36562 12.1012 1.2825 12.0604C1.19937 12.0196 1.34187 11.9729 1.24093 11.9729C1.14296 11.9729 1.07171 11.9904 1.07171 12.0604C1.07171 12.1304 1.16968 12.2121 1.30921 12.2121C1.44875 12.2121 1.62093 12.1421 1.59421 11.8912C1.56453 11.6375 0.733276 10.2287 0.733276 10.0596C0.733276 9.88458 0.887651 9.66583 1.29734 9.66583C1.56453 9.64541 1.6625 9.91958 1.7575 10.0129H1.75453Z" fill="#FFEC2D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75453 9.31589C1.8525 9.40922 1.93265 9.68339 2.19984 9.66589C2.60953 9.66589 2.7639 9.4413 2.7639 9.26922C2.7639 9.09714 1.93265 7.69422 1.90296 7.44047C1.87328 7.18672 2.04546 7.11672 2.185 7.11672C2.3275 7.11672 2.42546 7.19547 2.42546 7.26838C2.42546 7.3413 2.35421 7.35588 2.25625 7.35588C2.15828 7.35588 2.29781 7.30922 2.21468 7.26838C2.13156 7.22755 2.07218 7.32672 2.07218 7.38797C2.07218 7.44922 2.28593 7.46963 2.42843 7.42297C2.45515 7.56005 2.46703 7.5688 2.27109 7.80213C2.41359 7.71463 2.42546 7.6913 2.58281 7.7438C2.42546 7.60963 2.54125 7.34422 2.54718 7.27713C2.55312 7.21005 2.5175 7.12547 2.45515 7.08463C2.34234 6.98547 2.09296 6.97963 1.94453 7.0438C1.73078 7.14005 1.7189 7.41713 1.77531 7.51047L2.58281 9.21672C2.62734 9.28672 2.51453 9.52005 2.25921 9.5288C1.99203 9.54922 1.9 9.27214 1.8525 9.15255L2.21765 9.18172C2.21765 9.18172 2.2325 9.12339 2.21765 9.08839C2.09514 9.07959 1.97322 9.06401 1.8525 9.04172L1.83765 8.86089H2.01578L2.0039 8.77922C2.0039 8.77922 1.8525 8.79089 1.83765 8.77922C1.82281 8.77047 1.80796 8.59838 1.80796 8.59838C1.80796 8.59838 1.77828 8.58672 1.74859 8.58672C1.7189 8.58672 1.68921 8.59838 1.68921 8.59838C1.68921 8.59838 1.67734 8.77047 1.6625 8.77922C1.64765 8.79089 1.49625 8.77922 1.49625 8.77922L1.4814 8.86089H1.6625L1.64765 9.04172C1.64765 9.04172 1.46953 9.07672 1.2825 9.08839C1.27062 9.12339 1.2825 9.1788 1.2825 9.1788L1.64765 9.15255C1.60015 9.27214 1.50812 9.54922 1.24093 9.53172C0.98562 9.52005 0.872808 9.28672 0.91437 9.21672L1.72187 7.51047C1.77828 7.41713 1.7664 7.14005 1.55265 7.0438C1.40421 6.97963 1.15484 6.98547 1.04203 7.08463C0.979683 7.12547 0.944058 7.20713 0.949995 7.27422C0.955933 7.3413 1.06875 7.60963 0.91437 7.74088C1.07171 7.6913 1.08656 7.71172 1.22609 7.80213C1.03015 7.5688 1.04203 7.56005 1.07171 7.42297C1.21125 7.46963 1.425 7.45213 1.425 7.38797C1.425 7.32963 1.36562 7.22755 1.2825 7.26838C1.19937 7.30922 1.34187 7.35588 1.24093 7.35588C1.14296 7.35588 1.07171 7.33838 1.07171 7.26838C1.07171 7.19838 1.16968 7.11672 1.30921 7.11672C1.44875 7.11672 1.62093 7.18672 1.59421 7.43755C1.56453 7.6913 0.733276 9.10005 0.733276 9.26922C0.733276 9.44422 0.887651 9.66297 1.29734 9.66297C1.56453 9.68339 1.6625 9.40922 1.7575 9.31589H1.75453Z" fill="#FFEC2D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75453 4.6843C1.8525 4.59096 1.93265 4.3168 2.19984 4.3343C2.60953 4.3343 2.7639 4.55888 2.7639 4.73096C2.7639 4.90305 1.93265 6.30596 1.90296 6.56263C1.87328 6.81346 2.04546 6.88346 2.185 6.88346C2.3275 6.88346 2.42546 6.80471 2.42546 6.73471C2.42546 6.66471 2.35421 6.64138 2.25625 6.64138C2.15828 6.64138 2.29781 6.69388 2.21468 6.73471C2.13156 6.77555 2.07218 6.67346 2.07218 6.61221C2.07218 6.55388 2.28593 6.53055 2.42843 6.57721C2.45515 6.44013 2.46703 6.43138 2.27109 6.19805C2.41359 6.28846 2.42546 6.30888 2.58281 6.25638C2.42546 6.39055 2.54125 6.65888 2.54718 6.72305C2.55312 6.78721 2.5175 6.87471 2.45515 6.91555C2.34234 7.01763 2.09296 7.02055 1.94453 6.95638C1.73078 6.86013 1.7189 6.58305 1.77531 6.48971L2.58281 4.78346C2.62734 4.71346 2.51453 4.48013 2.25921 4.47138C1.99203 4.45096 1.9 4.72805 1.8525 4.84763L2.21765 4.81846C2.21765 4.81846 2.2325 4.8768 2.21765 4.9118C2.02765 4.92346 1.8525 4.95846 1.8525 4.95846L1.83765 5.1393H2.01578L2.0039 5.22096C2.0039 5.22096 1.8525 5.21221 1.83765 5.22096C1.82281 5.22971 1.80796 5.40471 1.80796 5.40471C1.80796 5.40471 1.77828 5.41346 1.74859 5.41346C1.7189 5.41346 1.68921 5.40471 1.68921 5.40471C1.68921 5.40471 1.67734 5.22971 1.6625 5.22096C1.64765 5.21221 1.49625 5.22096 1.49625 5.22096L1.4814 5.1393H1.6625L1.64765 4.95846C1.64765 4.95846 1.46953 4.92346 1.2825 4.9118C1.27062 4.8768 1.2825 4.82138 1.2825 4.82138L1.64765 4.84763C1.60015 4.72805 1.50812 4.45096 1.24093 4.46846C0.98562 4.48013 0.872808 4.71346 0.91437 4.78346L1.72187 6.48971C1.77828 6.58305 1.7664 6.86013 1.55265 6.95638C1.40421 7.02055 1.15484 7.01471 1.04203 6.91555C0.979683 6.87471 0.944058 6.79305 0.949995 6.72596C0.955933 6.65888 1.06875 6.39055 0.91437 6.2593C1.07171 6.30888 1.08656 6.28846 1.22609 6.19805C1.03015 6.43138 1.04203 6.44013 1.07171 6.57721C1.21125 6.53055 1.425 6.55096 1.425 6.61221C1.425 6.67055 1.36562 6.77263 1.2825 6.7318C1.19937 6.69388 1.34187 6.6443 1.24093 6.6443C1.14296 6.6443 1.07171 6.6618 1.07171 6.7318C1.07171 6.8018 1.16968 6.88346 1.30921 6.88346C1.44875 6.88346 1.62093 6.81346 1.59421 6.56263C1.56453 6.30888 0.733276 4.90305 0.733276 4.73096C0.733276 4.55888 0.887651 4.33721 1.29734 4.33721C1.56453 4.3168 1.6625 4.59096 1.7575 4.68721L1.75453 4.6843Z" fill="#FFEC2D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75453 3.98727C1.8525 4.0806 1.93265 4.35769 2.19984 4.33727C2.60953 4.33727 2.7639 4.11269 2.7639 3.9406C2.7639 3.76852 1.93265 2.3656 1.90296 2.11185C1.87328 1.8581 2.04546 1.7881 2.185 1.7881C2.3275 1.7881 2.42546 1.86977 2.42546 1.93977C2.42546 2.00977 2.35421 2.03019 2.25625 2.03019C2.15828 2.03019 2.29781 1.9806 2.21468 1.93977C2.13156 1.89894 2.07218 1.9981 2.07218 2.05935C2.07218 2.1206 2.28593 2.14102 2.42843 2.09435C2.45515 2.23144 2.46703 2.24019 2.27109 2.47352C2.41359 2.38602 2.42546 2.36269 2.58281 2.41519C2.42546 2.28394 2.54125 2.0156 2.54718 1.94852C2.55312 1.88144 2.5175 1.79685 2.45515 1.75602C2.34234 1.65685 2.09296 1.65102 1.94453 1.7181C1.73078 1.81144 1.7189 2.09144 1.77531 2.18185L2.58281 3.89102C2.62734 3.96102 2.51453 4.19435 2.25921 4.20602C1.99203 4.22352 1.9 3.94935 1.8525 3.82685L2.21765 3.85602C2.21765 3.85602 2.2325 3.79769 2.21765 3.76269C2.0952 3.75477 1.97329 3.74016 1.8525 3.71894L1.83765 3.53519H2.01578L2.0039 3.45352C2.0039 3.45352 1.8525 3.46519 1.83765 3.45352C1.82281 3.44477 1.80796 3.27269 1.80796 3.27269C1.80796 3.27269 1.77828 3.26102 1.74859 3.26102C1.7189 3.26102 1.68921 3.27269 1.68921 3.27269C1.68921 3.27269 1.67734 3.44477 1.6625 3.45352C1.64765 3.46519 1.49625 3.45352 1.49625 3.45352L1.4814 3.53519H1.6625L1.64765 3.71894C1.64765 3.71894 1.46953 3.75102 1.2825 3.76269C1.27062 3.8006 1.2825 3.85602 1.2825 3.85602L1.64765 3.82685C1.60015 3.94935 1.50812 4.22352 1.24093 4.20602C0.98562 4.19435 0.872808 3.96102 0.91437 3.89102L1.72187 2.18185C1.77828 2.09144 1.7664 1.81144 1.55265 1.71519C1.40421 1.65102 1.15484 1.65685 1.04203 1.75602C0.979683 1.79685 0.944058 1.87852 0.949995 1.9456C0.955933 2.01269 1.06875 2.28394 0.91437 2.41227C1.07171 2.36269 1.08656 2.3831 1.22609 2.47352C1.03015 2.24019 1.04203 2.23144 1.07171 2.09435C1.21421 2.14102 1.425 2.12352 1.425 2.05935C1.425 2.00102 1.36562 1.89894 1.2825 1.93977C1.19937 1.9806 1.34187 2.03019 1.24093 2.03019C1.14296 2.03019 1.07171 2.00977 1.07171 1.93977C1.07171 1.86977 1.16968 1.7881 1.30921 1.7881C1.44875 1.7881 1.6239 1.8581 1.59421 2.10894C1.56453 2.36269 0.733276 3.77144 0.733276 3.9406C0.733276 4.1156 0.887651 4.33727 1.29734 4.33727C1.56453 4.35769 1.6625 4.0806 1.7575 3.98727H1.75453Z" fill="#FFEC2D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.78724 0.379239C1.88521 0.285905 1.85255 0.131322 2.12271 0.151739C2.5324 0.151739 2.54427 0.396739 2.54427 0.568822C2.54427 0.740905 1.92974 0.980072 1.90005 1.23382C1.87037 1.48757 2.04255 1.55466 2.18505 1.55466C2.32458 1.55466 2.42255 1.47591 2.42255 1.40591C2.42255 1.33591 2.35724 1.31257 2.2563 1.31257C2.15537 1.31257 2.30084 1.36216 2.21474 1.40007C2.12865 1.43799 2.07224 1.34174 2.07224 1.28341C2.07224 1.21924 2.28599 1.19882 2.42849 1.24549C2.45818 1.10841 2.47005 1.09966 2.27115 0.866322C2.41365 0.956739 2.42552 0.977155 2.58287 0.924655C2.42552 1.05882 2.54427 1.32716 2.54724 1.39424C2.55021 1.46132 2.51755 1.54299 2.45818 1.58382C2.33943 1.69174 2.09302 1.69174 1.94459 1.62757C1.72787 1.53424 1.71599 1.25424 1.7724 1.16091L2.37505 0.562989C2.41662 0.492989 2.43443 0.294655 2.17912 0.285905C1.91193 0.265489 1.81693 0.624239 1.76943 0.743822C1.70708 0.612572 1.63584 0.250905 1.36568 0.271322C1.11037 0.280072 1.06287 0.475489 1.10443 0.548405L1.71896 1.16091C1.77834 1.25424 1.76646 1.53424 1.54974 1.62757C1.4013 1.69466 1.1549 1.68882 1.04208 1.58674C0.976772 1.54591 0.941147 1.46716 0.947085 1.39716C0.953022 1.32716 1.0688 1.06174 0.914429 0.930489C1.0688 0.980072 1.08365 0.959655 1.22318 0.872155C1.02724 1.10257 1.04208 1.11132 1.0688 1.25132C1.2113 1.20466 1.42505 1.22216 1.42505 1.28341C1.42505 1.34466 1.36568 1.44674 1.27958 1.40591C1.19646 1.36507 1.33896 1.31549 1.23802 1.31549C1.14005 1.31549 1.0688 1.33591 1.0688 1.40299C1.0688 1.47007 1.16677 1.55757 1.30927 1.55757C1.45177 1.55757 1.62099 1.48757 1.5913 1.23382C1.56162 0.980072 0.938179 0.705905 0.938179 0.533822C0.938179 0.358822 0.979741 0.151739 1.38943 0.151739C1.65662 0.131322 1.68927 0.285905 1.78724 0.379239Z" fill="#FFEC2D"/>
                    <path d="M13.1076 6.00572C13.1076 4.61915 11.9004 3.49512 10.4112 3.49512C8.92196 3.49512 7.71472 4.61915 7.71472 6.00572C7.71472 7.39228 8.92196 8.51632 10.4112 8.51632C11.9004 8.51632 13.1076 7.39228 13.1076 6.00572Z" fill="#FFEC2D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2843 1.99774C10.259 1.99774 10.1386 2.83201 10.0942 3.01879C10.0499 3.43904 10.6646 3.42348 10.5632 3.00323L10.2843 1.99463V1.99774ZM10.4998 10.0852C10.522 10.0852 10.7058 9.26028 10.766 9.07661C10.8388 8.66259 10.2241 8.6408 10.2907 9.06416L10.4998 10.0852ZM6.20325 5.98856C6.20325 6.01035 7.08727 6.18467 7.28372 6.24071C7.72732 6.3123 7.759 5.74263 7.30273 5.80489L6.20325 5.99167V5.98856ZM14.8122 6.08817C14.8122 6.06638 13.9187 5.92318 13.719 5.87338C13.2723 5.82046 13.2691 6.39013 13.719 6.3123L14.8122 6.08817ZM7.10945 3.34254C7.09361 3.35811 7.67662 4.0056 7.79386 4.16436C8.09804 4.47566 8.50044 4.03984 8.09804 3.82816L7.10945 3.34565V3.34254ZM13.7983 8.6657C13.8141 8.65014 13.174 8.05245 13.041 7.90614C12.7083 7.61975 12.3502 8.08358 12.7685 8.26413L13.7983 8.66881V8.6657ZM8.44341 2.43978C8.4244 2.44912 8.69689 3.25226 8.74125 3.44216C8.89334 3.8375 9.44467 3.57913 9.1595 3.23981L8.44658 2.43978H8.44341ZM12.3439 9.6743C12.3661 9.66496 12.1538 8.84625 12.1253 8.65636C12.0017 8.25168 11.4345 8.46958 11.6912 8.83069L12.3471 9.67119L12.3439 9.6743ZM13.304 3.00011C13.2849 2.98455 12.5815 3.51687 12.4104 3.62271C12.0714 3.90287 12.5308 4.28265 12.7653 3.91221L13.304 3.00011ZM7.50552 9.02992C7.52136 9.04548 8.26597 8.56297 8.44341 8.46647C8.80145 8.21121 8.3737 7.8003 8.11071 8.15518L7.50869 9.02992H7.50552ZM6.39653 4.54414C6.38702 4.56282 7.15698 5.00175 7.32491 5.11693C7.72098 5.31927 7.95228 4.79007 7.49918 4.70602L6.39653 4.54414ZM14.4351 7.60729C14.4446 7.58862 13.7064 7.09988 13.5479 6.97536C13.1677 6.745 12.8984 7.25864 13.3451 7.37071L14.4351 7.60729ZM11.8813 2.22499C11.8591 2.21876 11.4187 2.95342 11.3014 3.11218C11.3017 3.16288 11.318 3.21224 11.3482 3.25334C11.3785 3.29444 11.421 3.32521 11.4699 3.34135C11.5188 3.35748 11.5717 3.35817 11.621 3.34331C11.6704 3.32845 11.7137 3.29879 11.745 3.25849L11.8813 2.22499ZM8.90602 9.82995C8.9282 9.83929 9.42249 9.13264 9.54923 8.98011C9.78053 8.61901 9.2197 8.38865 9.11514 8.80578L8.90602 9.82995ZM6.45039 7.67267C6.4599 7.69134 7.33759 7.48589 7.54354 7.45476C7.97446 7.33647 7.73365 6.81349 7.35343 7.0563L6.45039 7.67267ZM14.4383 4.47566C14.432 4.45698 13.5416 4.60329 13.3356 4.62197C12.892 4.71224 13.098 5.25078 13.4941 5.03288L14.4383 4.47566Z" fill="#FFEC2D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.1589 2.05072C11.1367 2.04761 10.8389 2.84141 10.7502 3.01574C10.6202 3.42042 11.2254 3.52004 11.2159 3.09045L11.1621 2.04761L11.1589 2.05072ZM9.62215 10.0168C9.64433 10.023 10.0024 9.24788 10.1038 9.07667C10.2622 8.68443 9.66651 8.54746 9.64433 8.97394L9.61898 10.0168H9.62215ZM9.3148 2.12854C9.29262 2.13477 9.375 2.97527 9.375 3.16827C9.43521 3.5823 10.0277 3.4391 9.83128 3.05309L9.3148 2.12854ZM11.4694 9.97009C11.4916 9.96697 11.4694 9.12336 11.4853 8.93036C11.4567 8.51011 10.8515 8.61595 11.0226 9.01441L11.4662 9.97009H11.4694ZM7.78756 2.82585C7.76855 2.8383 8.18997 3.5823 8.26918 3.75973C8.49732 4.12395 8.98844 3.78153 8.64307 3.49202L7.78756 2.82585ZM13.0093 9.29769C13.0283 9.28523 12.6608 8.51322 12.5974 8.33267C12.3978 7.956 11.8845 8.2673 12.2045 8.57548L13.0093 9.29769ZM6.67223 3.8718C6.65956 3.89048 7.3408 4.44459 7.48338 4.58778C7.83509 4.84927 8.16145 4.36365 7.73053 4.21111L6.67223 3.8718ZM14.093 8.2206C14.1056 8.20193 13.4688 7.60424 13.3357 7.45482C13.0062 7.17154 12.6449 7.63537 13.0632 7.81592L14.093 8.2206ZM6.18428 5.17613C6.17794 5.19792 7.01761 5.51233 7.20138 5.60261C7.62597 5.74269 7.76221 5.18547 7.29961 5.17302L6.18428 5.17613ZM14.657 6.97542C14.6665 6.95674 13.8522 6.58941 13.6747 6.48669C13.2628 6.31859 13.0822 6.86647 13.5416 6.91005L14.657 6.97542ZM6.15576 6.7793C6.15893 6.79798 7.06513 6.78553 7.27109 6.80109C7.72102 6.7793 7.61329 6.21586 7.18237 6.36839L6.15576 6.7793ZM14.7172 5.37847C14.7172 5.35668 13.811 5.30999 13.6082 5.28197C13.1551 5.27574 13.2216 5.84542 13.662 5.71778L14.7172 5.37536V5.37847ZM6.93206 8.44162C6.94473 8.4603 7.75588 8.08052 7.94599 8.00892C8.33889 7.80658 7.97767 7.34275 7.66399 7.65716L6.93206 8.44162ZM13.9757 3.70059C13.9631 3.68191 13.1297 4.00877 12.9301 4.06792C12.5214 4.24536 12.8477 4.73098 13.1836 4.43836L13.9757 3.70059ZM8.25017 9.54361C8.26918 9.55295 8.84903 8.90545 8.99478 8.76848C9.27044 8.4354 8.74129 8.14589 8.58604 8.55058L8.25017 9.54361ZM12.6766 2.57681C12.6608 2.56436 12.0334 3.17139 11.8782 3.29902C11.5803 3.61343 12.0873 3.93717 12.2711 3.54494L12.6735 2.57681H12.6766Z" fill="#FFEC2D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.28826 7.67566C6.33667 7.8362 6.34358 8.73524 7.3186 9.60218C8.28671 10.4627 9.94632 10.6553 9.94632 10.6553C9.94632 10.6553 9.95323 10.7774 9.83568 10.7838C9.71812 10.7966 9.15109 10.6874 8.86757 10.604C8.59097 10.5269 8.34203 10.3856 8.31437 10.392C8.27979 10.4049 8.22447 10.4948 8.14149 10.482C8.05851 10.4691 7.65744 10.0838 7.47765 9.98106C7.11804 9.6924 6.79967 9.36222 6.53029 8.99854C6.33667 8.70956 6.28826 8.51691 6.22603 8.51691C6.16379 8.51691 5.9356 8.65818 5.9356 8.65818C5.9356 8.65818 5.72814 8.36921 5.54835 7.90684C5.36165 7.44448 5.38239 7.17477 5.42388 7.1555C5.47229 7.13624 5.47229 7.49585 5.61059 7.82336C5.74889 8.15729 5.94251 8.26004 5.94251 8.26004C5.94251 8.26004 5.81804 8.08665 5.72123 7.6564C5.62442 7.22614 5.58293 6.80873 5.65208 6.68029C5.72123 6.55186 5.78346 6.51333 5.79038 6.51975C5.80421 6.53259 5.67282 6.71882 5.76272 7.2133C5.85261 7.70777 6.09464 8.12518 6.14996 8.10592C6.20528 8.08665 6.11539 7.9839 6.08081 7.69493C6.04624 7.40595 6.11539 7.22614 6.19145 7.20045C6.22603 7.17477 6.28135 7.52154 6.28826 7.67566ZM5.61059 8.49764C5.42388 8.3371 5.13345 7.77841 5.07122 7.80409C5.00207 7.8362 5.54144 8.63892 5.55527 8.70314C5.5691 8.7802 5.68665 8.99854 5.59676 8.96643C5.50686 8.93432 4.86377 8.30499 4.93983 8.427C5.0159 8.54902 5.49995 9.10128 5.47229 9.13339C5.44463 9.1655 5.07122 8.82515 5.05738 8.8701C5.05047 8.90863 5.42388 9.24256 5.41697 9.28109C5.41005 9.31962 5.17494 9.06917 5.17494 9.12055C5.17494 9.17192 5.41697 9.42237 5.41697 9.4609C5.41697 9.49943 5.20952 9.28109 5.27867 9.39668C5.3409 9.52512 5.52069 9.63429 5.51378 9.67282C5.50686 9.71135 5.36165 9.62144 5.36165 9.64071C5.36165 9.65997 5.63133 9.74988 5.69357 9.82051C5.76272 9.89115 6.20528 10.3664 6.5372 10.604C6.86913 10.8416 7.8234 11.259 7.89255 11.259C7.95479 11.259 8.0516 11.1305 8.03085 11.0792C8.01011 11.0278 7.07658 10.7324 6.82072 10.5141C6.55795 10.2957 5.92177 9.76914 5.86645 9.74346C5.81804 9.71135 5.67282 9.72419 5.67282 9.69208C5.67282 9.65997 5.85953 9.71135 5.8457 9.69208C5.83879 9.67282 5.58984 9.57007 5.59676 9.5508C5.61059 9.53154 5.76963 9.58933 5.76963 9.57007C5.76963 9.5508 5.4792 9.4031 5.49303 9.37099C5.49995 9.33889 5.7074 9.4609 5.7074 9.43521C5.7074 9.42237 5.4308 9.24256 5.43771 9.21045C5.44463 9.17834 5.65208 9.35173 5.64516 9.3132C5.63825 9.27467 5.4792 9.05633 5.4792 9.03064C5.4792 8.99854 5.72814 9.24898 5.7558 9.19761C5.76963 9.15266 5.66591 8.73524 5.67282 8.72882C5.67974 8.7224 5.85953 8.81873 5.88719 8.76093C5.92176 8.69671 5.76272 8.61323 5.61059 8.49764ZM8.79842 11.6571C8.66703 11.6764 8.6048 11.6314 8.68087 11.5287C8.78459 11.5287 9.06119 11.4452 9.158 11.4067C9.25481 11.3682 9.35854 11.3168 9.44152 11.2461C9.5245 11.1627 9.57982 11.2911 9.53141 11.3617C9.49684 11.4067 9.33779 11.4902 9.22024 11.5351C9.04736 11.5865 8.89523 11.6635 8.79842 11.6571ZM9.6628 11.3296C9.5729 11.2397 9.64897 11.1755 9.78036 11.1049C9.97398 11.0085 9.91866 10.8737 10.1676 10.7645C10.2782 10.7003 11.8272 10.1223 12.332 9.81409C12.8368 9.50585 14.2544 8.51048 14.6347 7.82336C15.0081 7.14266 14.8283 7.09128 14.8837 7.0656C14.9321 7.03349 14.9874 7.16192 14.9805 7.31604C14.9666 7.46374 14.8422 7.91326 14.8837 7.95822C14.9251 8.00317 15.4507 7.60502 15.672 7.12339C15.8932 6.64176 16.0592 6.14087 16.1629 6.14087C16.2736 6.14087 15.9831 6.96285 15.7964 7.28394C15.6166 7.60502 15.4023 7.76556 15.4507 7.8362C15.506 7.90042 16.0454 7.48301 16.2321 7.17477C16.4119 6.8601 16.5848 6.58397 16.6193 6.64176C16.5643 7.01794 16.4046 7.37429 16.156 7.67566C15.8656 7.9839 15.5198 8.20866 15.5752 8.25362C15.6236 8.30499 16.0177 8.35636 16.4257 8.09949C16.8406 7.8362 16.8821 7.45732 16.9305 7.47659C16.9858 7.49585 16.8821 8.01601 16.4879 8.3371C16.0938 8.65818 15.5752 8.69029 15.589 8.76093C15.6166 8.82515 16.7161 8.46553 16.6954 8.54901C16.6746 8.62608 15.2709 9.13981 15.2571 9.19119C15.2571 9.22972 15.4991 9.24256 15.8794 9.15908C16.2528 9.08202 16.6124 8.80588 16.6608 8.8701C16.6746 8.96001 16.3911 9.17834 15.9624 9.28109C15.5268 9.38384 15.3124 9.5187 15.2986 9.5508C15.2916 9.58291 16.073 9.4609 16.073 9.49943C16.073 9.53796 15.0496 9.72419 15.0427 9.77556C15.0289 9.82052 16.0108 9.58933 15.997 9.64713C15.9693 9.69208 14.6624 10.0517 14.6762 10.071C14.6831 10.0967 15.7688 9.85262 15.748 9.89115C15.7204 9.93611 13.9225 10.4049 13.9086 10.437C13.8948 10.4627 15.4991 10.1031 15.4853 10.1352C15.4714 10.1673 14.6555 10.3535 14.6555 10.3728C14.6555 10.392 15.3124 10.2765 15.2986 10.3086C15.2916 10.3343 13.6389 10.726 13.6044 10.7838C13.5698 10.848 14.4618 10.6232 14.448 10.7388C14.4342 10.8544 12.5325 11.4452 12.5256 11.336C12.5118 11.2269 13.6804 10.9507 13.6735 10.9186C13.6597 10.8865 13.0028 10.9828 12.9889 10.9251C12.982 10.8608 13.4246 10.7324 13.39 10.7067C13.3554 10.6746 13.0235 10.7966 13.0512 10.726C13.0857 10.6553 13.715 10.3856 13.7012 10.3664C13.6943 10.3471 13.473 10.4306 13.4937 10.3664C13.5214 10.2957 14.856 9.93611 14.8352 9.89115C14.8145 9.85262 14.2198 9.98106 14.1645 9.9939C14.1437 9.95537 14.9943 9.65997 14.9805 9.6086C14.9528 9.56365 14.5241 9.78198 14.4964 9.72419C14.4826 9.65997 15.2501 9.38384 15.2017 9.33889C15.1533 9.29393 14.8076 9.45448 14.7592 9.40953C14.7108 9.36457 15.4853 8.8701 15.3677 8.85726C15.2501 8.85083 15.1049 9.01138 15.0911 8.90863C15.1049 8.7802 15.6927 8.56828 15.5613 8.46553C15.3539 8.40774 14.6555 8.51048 14.365 8.67103C14.0746 8.83157 13.1065 9.72419 12.8714 9.86547C12.6363 10.0003 11.8341 10.315 11.682 10.3792C11.4469 10.4563 11.4054 10.5719 11.1634 10.6874C10.7277 10.7966 10.7346 10.9186 10.5272 10.9893C10.4511 11.0085 9.66971 11.3553 9.6628 11.3296ZM8.57022 11.7791C8.43884 11.8434 8.32128 11.9975 8.39735 12.0617C8.43884 12.1388 8.57022 11.8883 8.67395 11.9012L9.22715 11.9268C9.5245 11.9461 9.66971 11.869 9.83568 11.8819C10.0016 11.8947 10.3681 11.7984 10.541 11.7984C10.7139 11.7984 10.7485 11.8177 10.7623 11.747C10.783 11.6828 10.2229 11.7278 9.97398 11.7213C9.72504 11.7085 9.41386 11.7663 9.22715 11.7663C9.05428 11.7599 8.75693 11.7085 8.57022 11.7791Z" fill="#FFEC2D"/>
                    <path d="M9.40003 11.702C9.40003 11.6488 9.3474 11.6057 9.28247 11.6057C9.21755 11.6057 9.16492 11.6488 9.16492 11.702C9.16492 11.7552 9.21755 11.7984 9.28247 11.7984C9.3474 11.7984 9.40003 11.7552 9.40003 11.702Z" fill="#FFEC2D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.1592 11.5158C12.2767 11.4965 12.5948 11.5993 12.8161 11.6442C13.2172 11.7919 13.964 11.7213 13.964 11.7919C13.964 11.8626 13.9156 11.9461 13.7427 11.9589C13.5698 11.9717 13.1342 11.8947 13.148 11.8947C13.1619 11.8947 13.4938 12.0424 13.397 12.0809C13.3002 12.1194 13.0166 11.9974 12.9682 12.0295C12.9198 12.0617 13.231 12.1194 13.1757 12.1387C13.1342 12.158 12.9198 12.113 12.8507 12.1194C12.7815 12.1323 12.906 12.2029 12.823 12.2286C12.74 12.2607 12.6017 12.1901 12.5464 12.2093C12.4842 12.2286 12.6709 12.3378 12.5879 12.3506C12.5049 12.3635 12.3113 12.2993 12.2007 12.2864C12.09 12.2864 12.3044 12.3892 12.2352 12.402C12.1661 12.4084 11.9725 12.3185 11.9241 12.3185C11.8757 12.3185 11.9241 12.447 11.8549 12.447C11.7858 12.447 11.7028 12.3378 11.6613 12.3378C11.6198 12.3378 11.6613 12.4662 11.5921 12.4662C11.523 12.4662 11.4953 12.3314 11.44 12.3378C11.3709 12.3506 11.44 12.5112 11.3432 12.4983C11.2533 12.4919 11.2395 12.3314 11.1634 12.3378C11.0943 12.3506 11.1772 12.4983 11.1081 12.4983C11.0389 12.4983 11.0251 12.3506 10.956 12.3378C10.8868 12.3314 10.9145 12.4791 10.873 12.4791C10.8315 12.4791 10.79 12.3378 10.7623 12.3378C10.7416 12.3378 10.7623 12.4791 10.6794 12.4662C10.5964 12.4534 10.5964 12.3121 10.5756 12.3185C10.548 12.3314 10.548 12.4341 10.4927 12.4341C10.4373 12.4341 10.4304 12.3314 10.4097 12.3442C10.382 12.3506 10.299 12.4791 10.2437 12.4598C10.1815 12.4405 10.2575 12.3378 10.2299 12.3378C10.2022 12.3378 10.1331 12.4084 10.0916 12.402C10.0501 12.3956 10.0916 12.3121 10.0778 12.3121C10.0639 12.3121 9.9602 12.3635 9.91179 12.3635C9.86339 12.3635 9.732 12.4277 9.69742 12.3699C9.66285 12.3057 9.78732 12.3057 9.81498 12.2479C9.83573 12.1901 9.74583 12.0167 9.84264 11.9589C9.93254 11.8947 10.2299 12.0424 10.6724 11.9396C11.4746 11.7406 12.0969 11.5094 12.1592 11.5158Z" fill="#FFEC2D"/>
                  </svg>
                  Казахстан
                </p>
              </div>
              <div className="country-phone">
                <p>+77777071234</p>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4  justify-content-between row">
            <div className="col-6 header-column header-column-langs justify-content-center">
              <a href="https://twitter.com">
              <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_7_87)">
                  <path fillRule="evenodd" clipRule={"evenodd"} d="M0 0H21V16H0V0Z" fill="white"/>
                </g>
                <path fillRule="evenodd" clipRule={"evenodd"} d="M0 5.33325H21V15.9999H0V5.33325Z" fill="#0039A6"/>
                <path fillRule="evenodd" clipRule={"evenodd"} d="M0 10.6667H21V16.0001H0V10.6667Z" fill="#D52B1E"/>
                <defs>
                  <filter id="filter0_d_7_87" x="-4" y="0" width="29" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={"0"} result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_87"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_87" result="shape"/>
                  </filter>
                </defs>
              </svg>

                рус

              </a>
              <a href="https://twitter.com">
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H21V16H0V0Z" fill="#012169"/>
                  <path d="M2.46094 0L10.4672 6.03333L18.4406 0H21V2.06667L13.125 8.03333L21 13.9667V16H18.375L10.5 10.0333L2.65781 16H0V14L7.84219 8.06667L0 2.13333V0H2.46094Z" fill="white"/>
                  <path d="M13.9125 9.36667L21 14.6667V16L12.1078 9.36667H13.9125ZM7.875 10.0333L8.07187 11.2L1.77187 16H0L7.875 10.0333ZM21 0V0.1L12.8297 6.36667L12.8953 4.9L19.3594 0H21ZM0 0L7.84219 5.86667H5.87344L0 1.4V0Z" fill="#C8102E"/>
                  <path d="M7.90781 0V16H13.1578V0H7.90781ZM0 5.33333V10.6667H21V5.33333H0Z" fill="white"/>
                  <path d="M0 6.43333V9.63333H21V6.43333H0ZM8.95781 0V16H12.1078V0H8.95781Z" fill="#C8102E"/>
                </svg>
                en
              </a>
            </div>
            <div className="col-6 header-column header-column-social justify-content-end">
              <div onClick={() => this.setState({dropdown: !this.state.dropdown})} style={{position:"relative", cursor:`pointer`}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                  <div className={`whatsapp-dropdown ${dropdown && `full-opacity`}`}>
                    <a href="#">KZ</a>
                    <a href="#">TR</a>
                  </div>
              </div>
              {/* <a href="https://twitter.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                </svg>
              </a> */}
              
              <a href="https://twitter.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </header>
    
  )}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
