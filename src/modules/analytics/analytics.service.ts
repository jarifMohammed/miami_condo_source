import { Development } from '../development/development.model';
import { Waterfront } from '../waterfront/waterfront.model';
import { Article } from '../article/article.model';
import { Neighbourhood } from '../neighbourhood/neighbourhood.model';
import { Contact } from '../contact/contact.model';
import { EContactStatus } from '../contact/contact.interface';

const getAnalyticsData = async () => {
  const [
    totalDevelopments,
    totalWaterfrontProperties,
    totalPublishedArticles,
    totalNeighbourhoods,
    totalPendingContactRequests,
    totalCompletedContactRequests,
  ] = await Promise.all([
    Development.countDocuments(),
    Waterfront.countDocuments(),
    Article.countDocuments(),
    Neighbourhood.countDocuments(),
    Contact.countDocuments({ status: EContactStatus.PENDING }),
    Contact.countDocuments({ status: EContactStatus.COMPLETED }),
  ]);

  return {
    totalDevelopments,
    totalWaterfrontProperties,
    totalPublishedArticles,
    totalNeighbourhoods,
    totalPendingContactRequests,
    totalCompletedContactRequests,
  };
};

export const AnalyticsServices = {
  getAnalyticsData,
};
