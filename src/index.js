import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, getIndexRoute} from 'react-router';

import {Intro} from './page/intro';
import {Main} from './page/main';
import {Reference} from './page/reference';
import {Proposal} from './page/proposal';
import {Vision} from './page/vision';

import {Reference1} from './page/reference/1';
import {Reference2} from './page/reference/2';
import {Reference3} from './page/reference/3';
import {Reference4} from './page/reference/4';

import {Proposal1} from './page/proposal/1';
import {Proposal2} from './page/proposal/2';
import {Proposal3} from './page/proposal/3';
import {Proposal4} from './page/proposal/4';
import {Proposal5} from './page/proposal/5';

import {Vision1} from './page/vision/1';
import {Vision2} from './page/vision/2';
import {Vision3} from './page/vision/3';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <getIndexRoute component={Intro}/>
    <Route path="/" component={Intro}/>
    <Route path="/home" component={Main}>
      <getIndexRoute component={Reference}/>
      <Route path="/reference" component={Reference}>
        <Route path="/ui-cards" component={Reference1}/>
        <Route path="/ui-gnb" component={Reference2}/>
        <Route path="/ui-banners" component={Reference3}/>
        <Route path="/ui-library" component={Reference4}/>
      </Route>
      <Route path="/proposal" component={Proposal}>
        <Route path="/colors" component={Proposal1}/>
        <Route path="/layout" component={Proposal2}/>
        <Route path="/elements" component={Proposal3}/>
        <Route path="/viewer" component={Proposal4}/>
        <Route path="/effects" component={Proposal5}/>
      </Route>
      <Route path="/vision" component={Vision}>
        <Route path="/vision-uikit" component={Vision1}/>
        <Route path="/vision-best-ux" component={Vision2}/>
        <Route path="/vision-dev" component={Vision3}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
