import React, {Component} from 'react';
import PropTypes from 'prop-types';

const CHANGEPANE_JS = process.env.STORYBOOK_CHANGEPANE_JS || 'https://cdn.changepane.com/changepane.js';

class ChangePane extends Component {
  static propTypes = {
    apiUrl: PropTypes.string.isRequired
  };

  componentDidMount() {
    if (!document.getElementById('changepanejs')) {
      (function(c,h,a,n,g,e,s){c[g]=c[g]||function(){c[g].q.push(arguments)},
      c[g].q=[],c[g].l=1*new Date();e=h.createElement(a),e.async=1;e.src=n;
      s=h.getElementsByTagName(a)[0];s.parentNode.insertBefore(e, s);
      e.id="changepanejs";
      })(window, document, 'script', CHANGEPANE_JS, 'ChangePane');
    }

    window.ChangePane('render', {
      apiUrl: this.props.apiUrl,
      root: this.root
    });
  }

  render() {
    return (
      <span ref={(element) => this.root = element} />
    );
  }
}

export default ChangePane;
