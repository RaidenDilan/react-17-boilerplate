import React, { ReactNode } from 'react';
import './FullLayout.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';

type Props = {
  children: ReactNode;
};
class FullLayout extends React.PureComponent<Props> {
  render() {
    return (
      <div className="FullLayout">
        <Header />
        <div className="layout-body-component">
          {this.props.children}
        </div>
        <div className="spacer" />
        <Footer />
      </div>
    );
  }
}

export default FullLayout;
