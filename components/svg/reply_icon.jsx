// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class ReplyIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.reply'
                    defaultMessage='Reply Icon'
                >
                    {(ariaLabel) => (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='18'
                            height='16'
                            style={style}
                            role='icon'
                            aria-label={ariaLabel}
                            viewBox='0 0 18 16'
                        >
                            <path
                                fillRule='evenodd'
                                stroke='none'
                                d='M7.34087516,0 C7.13687516,0 6.92887516,0.093 6.76487516,0.301 L0.213875165,7.338 C-0.0711248352,7.698 -0.0711248352,8.257 0.212875165,8.617 L6.79587516,15.699 C6.95987516,15.907 7.16787516,16 7.37187516,16 C7.77587516,16 8.16487516,15.637 8.17387516,15.076 L8.21087516,12.535 C8.21887516,12.026 8.57087516,11.607 8.99787516,11.607 C9.00887516,11.607 9.01987516,11.608 9.02987516,11.608 C13.3968752,11.819 15.1608752,12.724 16.7038752,14.27 C16.8578752,14.423 17.0288752,14.49 17.1948752,14.49 C17.6748752,14.49 18.1158752,13.937 17.9728752,13.279 C16.4658752,6.371 10.8968752,5.412 8.79587516,4.957 C8.41787516,4.875 8.14787516,4.49 8.14687516,4.036 L8.14287516,0.939 C8.14187516,0.372 7.74887516,0 7.34087516,0 M6.64487516,2.631 L6.64687516,4.039 C6.64887516,5.209 7.40187516,6.19 8.47887516,6.423 L8.70487516,6.471 C10.5798752,6.871 14.2418752,7.65 15.9398752,11.758 C14.2508752,10.736 12.1738752,10.259 9.10187516,10.11 L9.03387516,10.107 L8.99787516,10.107 C7.75687516,10.107 6.73087516,11.187 6.71187516,12.512 L6.69787516,13.391 L1.66687516,7.978 L6.64487516,2.631'
                            />
                        </svg>
                    )}
                </FormattedMessage>
            </span>
        );
    }
}

const style = {
    enableBackground: 'new -158 242 18 18',
};
