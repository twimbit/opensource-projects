import React from 'react';
import _ from 'lodash';

import {htmlToReact, Link} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer" className={'wrapper ' + ((_.get(this.props, 'pageContext.frontmatter.template') === 'home') ? _.get(this.props, 'pageContext.site.data.footer.landing_style') : _.get(this.props, 'pageContext.site.data.footer.alt_style'))}>
                <div className="inner">
                    <ul className="menu">
                        <li>
                            {htmlToReact(_.get(this.props, 'pageContext.site.data.footer.copyright'))}
                            &nbsp;
                            {_.map(_.get(this.props, 'pageContext.site.data.footer.links'), (link, link_idx) => (<React.Fragment key={link_idx}>
                                <Link key={link_idx} to={_.get(link, 'url')} {...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'text')}</Link>.
                            </React.Fragment>))}
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}
