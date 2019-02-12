import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { StyleSheet, css } from 'aphrodite';
import { PlayArrowOutlined } from "@material-ui/icons";

class HomePage extends Component {
  begin = () => {

  };

  render() {
    return (
      <>
        <CSSTransition
          transitionName="slider"
          classNames="message"
          timeout={1000}
        >
          <div className={css(styles.background)}>
            <h1>Character Forge</h1>

            <div className={css(styles.beginRow)} onClick={this.begin}>
              <div>Créer un personnage</div>
              <PlayArrowOutlined className={css(styles.beginButton)} />
            </div>
          </div>
          <div className={css(styles.background)}>
            <h1>Let's go</h1>

            <div className={css(styles.beginRow)} onClick={this.begin}>
              <div>Créer un personnage</div>
              <PlayArrowOutlined className={css(styles.beginButton)} />
            </div>
          </div>
        </CSSTransition>
      </>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'fixed',
    color: '#FFFFFF',
  },
  beginButton: {
    fontSize: '64px',
  },
  beginRow: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    ':hover': {
      color: '#a1a1a1',
    }
  }
});

export default HomePage;