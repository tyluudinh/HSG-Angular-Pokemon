import {BaseApiAction} from './base.action';
export const HomePageActions = {
  top10Pokemon: BaseApiAction('homepage.top10Pokemon'),
  top10Items: BaseApiAction('homepage.top10Items'),
  allGameVersions: BaseApiAction('homepage.allGameVersions'),
  allGeneration: BaseApiAction('homepage.allGeneration'),
};
