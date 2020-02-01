import React from 'react';
import _ from 'lodash';

import {markdownify, Link, htmlToReact} from '../utils';

export default class Contact extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper ' + _.get(this.props, 'section.background_style') + ' fade-up'}>
                <div className="inner">
                    <h2>{_.get(this.props, 'section.title')}</h2>
                    {markdownify(_.get(this.props, 'section.text'))}
                    <div className="split style1">
                        <section>
                            <form name="contactForm" method="post" action="#" netlifyHoneypot="bot-field" data-netlify="true">
                                <div className="screen-reader-text">
                                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                                </div>
                                <div className="fields">
                                    <div className="field half">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" />
                                    </div>
                                    <div className="field half">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" id="email" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" rows="5" />
                                    </div>
                                </div>
                                <input type="hidden" name="form-name" value="contactForm" />
                                <ul className="actions">
                                    <li><Link to="" className="button submit">Send Message</Link></li>
                                </ul>
                            </form>
                        </section>
                        <section>
                            <ul className="contact">
                                {_.get(this.props, 'section.contact_list') && 
                                    _.map(_.get(this.props, 'section.contact_list'), (item, item_idx) => (
                                        <li key={item_idx}>
                                            <h3>{_.get(item, 'title')}</h3>
                                            {_.get(item, 'url') ? 
                                                <Link to={_.get(item, 'url')}>{_.get(item, 'text')}</Link>
                                             : 
                                                <span>{htmlToReact(_.get(item, 'text').replace(/\n/g, '<br />'))}</span>
                                            }
                                        </li>
                                    ))
                                }
                                {_.get(this.props, 'section.social') && 
                                    <li>
                                        <h3>{_.get(this.props, 'section.social.title')}</h3>
                                        <ul className="icons">
                                            {_.map(_.get(this.props, 'section.social.social_icons'), (item, item_idx) => (
                                                <li key={item_idx}><Link to={_.get(item, 'url')} className={_.get(item, 'icon')}><span className="label">{_.get(item, 'title')}</span></Link></li>
                                            ))}
                                        </ul>
                                    </li>
                                }
                            </ul>
                        </section>
                    </div>
                </div>
            </section>
        );
    }
}
