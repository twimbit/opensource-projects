import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix, classNames} from '../utils';

export default class Features extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper ' + _.get(this.props, 'section.background_style') + ' fade-up'}>
                <div className="inner">
                    <h2>{_.get(this.props, 'section.title')}</h2>
                    {markdownify(_.get(this.props, 'section.subtitle'))}
                    <div className="features">
                        {_.map(_.get(this.props, 'section.features_list'), (feature, feature_idx) => (
                            <section key={feature_idx}>
                                <span className={'icon major ' + _.get(feature, 'icon')}/>
                                <h3>{_.get(feature, 'title')}</h3>
                                {markdownify(_.get(feature, 'text'))}
                            </section>
                        ))}
                    </div>
                    {_.get(this.props, 'section.actions') && 
                        <ul className="actions">
                            {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                                <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        );
    }
}
