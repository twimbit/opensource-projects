import React from 'react';
import _ from 'lodash';

import {getPages, Link, safePrefix, markdownify} from '../utils';

export default class Spotlights extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper ' + _.get(this.props, 'section.background_style') + ' spotlights'}>
                {_.map(_.orderBy(_.filter(getPages(this.props.pageContext.pages, '/'), ['frontmatter.home_spotlights.enabled', true]), 'frontmatter.home_spotlights.weight'), (spotlight_page, spotlight_page_idx) => (
                    <section key={spotlight_page_idx}>
                        {_.get(spotlight_page, 'frontmatter.home_spotlights.home_img') && 
                            <Link to={safePrefix(_.get(spotlight_page, 'url'))} className="image"><img src={safePrefix(_.get(spotlight_page, 'frontmatter.home_spotlights.home_img.path'))} alt="" data-position={_.get(spotlight_page, 'frontmatter.home_spotlights.home_img.data_position')} /></Link>
                        }
                        <div className="content">
                            <div className="inner">
                                <h2>{_.get(spotlight_page, 'frontmatter.title')}</h2>
                                {markdownify(_.get(spotlight_page, 'frontmatter.home_spotlights.excerpt'))}
                                <ul className="actions">
                                    <li><Link to={safePrefix(_.get(spotlight_page, 'url'))} className="button">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        );
    }
}
