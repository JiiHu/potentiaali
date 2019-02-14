import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setLanguage } from "../../reducers/LocalizationReducer";
import { injectIntl, defineMessages } from "react-intl";

import styles from "./Nav.module.scss";

const menuMessages = defineMessages({
  frontPage: {
    id: "nav.frontPage",
    defaultMessage: "Etusivu"
  },
  schedule: {
    id: "nav.schedule",
    defaultMessage: "Aikataulu"
  },
  subjects: {
    id: "nav.subjects",
    defaultMessage: "Aineiden esittely"
  }
});

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  /**
   * Handle menu open & close
   *
   * @param {*} event
   * @memberof App
   */
  handleClick = event => {
    event.preventDefault();
    this.setState(oldState => {
      return {
        menuOpen: !oldState.menuOpen
      };
    });
  };

  render() {
    const {
      lang,
      intl: { formatMessage }
    } = this.props;
    const menu = [
      {
        name: formatMessage(menuMessages.frontPage),
        linkName: "",
        link: "/",
        disabled: false
      },
      {
        name: formatMessage(menuMessages.schedule),
        linkName: "schedule",
        link: "/schedule",
        disabled: false
      },
      {
        name: formatMessage(menuMessages.subjects),
        linkName: "subjects",
        link: "/subjects",
        disabled: false
      }
    ];

    return (
      <nav className={styles.navigation}>
        <div className={styles["navigation-container"]}>
          <NavLink to="/" className={styles["nav-logo"]}>
            <img
              className=""
              src="/logos/potentiaali-black.png"
              alt="Kumpulan Potentiaali"
            />
          </NavLink>
          <a
            href="#menu"
            className={styles["mobile-menu"]}
            onClick={this.handleClick}
          >
            <span
              className={
                !this.state.menuOpen
                  ? "fa fa-bars mobile-menu-icon"
                  : "fa fa-close mobile-menu-icon"
              }
            />
          </a>
          {this.state.menuOpen && (
            <div className={styles["mobile-nav-links"]}>
              {menu &&
                menu.map(
                  menuItem =>
                    !menuItem.disabled && (
                      <NavLink
                        exact
                        to={menuItem.link}
                        key={menuItem.linkName}
                        activeClassName={"active-link"}
                      >
                        {menuItem.name}
                      </NavLink>
                    )
                )}
              {lang === "en" ? (
                <button
                  className="changeLanguage"
                  onClick={() => this.props.setLanguage("fi")}
                >
                  Suomeksi
                </button>
              ) : (
                <button
                  className="changeLanguage"
                  onClick={() => this.props.setLanguage("en")}
                >
                  In English
                </button>
              )}
            </div>
          )}
          <div className={styles["nav-links"]}>
            {menu &&
              menu.map(
                menuItem =>
                  !menuItem.disabled && (
                    <NavLink
                      exact
                      to={menuItem.link}
                      key={menuItem.linkName}
                      activeClassName="active-link"
                    >
                      {menuItem.name}
                    </NavLink>
                  )
              )}
            {lang === "en" ? (
              <button
                className={styles.changeLanguage}
                onClick={() => this.props.setLanguage("fi")}
              >
                Suomeksi
              </button>
            ) : (
              <button
                className={styles.changeLanguage}
                onClick={() => this.props.setLanguage("en")}
              >
                In English
              </button>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  intl: PropTypes.any,
  setLanguage: PropTypes.func,
  lang: PropTypes.string
};

const mapStateToProps = state => {
  return {
    lang: state.localization.lang
  };
};

const mapDispatchToProps = {
  setLanguage
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(injectIntl(Nav))
);
