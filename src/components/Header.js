import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, classNames} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <Link to={safePrefix('/')} className="title">{_.get(this.props, 'pageContext.site.siteMetadata.title')}</Link>
                <nav>
                    <ul>
                        {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                            <li key={item_idx}><Link to={safePrefix(_.get(item, 'url'))} className={classNames({'active': _.get(item, 'url') === _.get(this.props, 'pageContext.url')})}>{_.get(item, 'title')}</Link></li>
                        ))}
                    </ul>
                </nav>
            </header>
        );
    }
}
