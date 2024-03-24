import { createRouter, createWebHistory } from 'vue-router';

// import HomePageViews from '../views/AboutPageView.vue';
import HomePageViews from '../views/HomePageView.vue';

import PrivacyPolicy from '../views/PrivacyPolicyViews.vue';
import RefundPolicy from '../views/RefundPolicyViews.vue';
import DeliveryPolicy from '../views/DeliveryPolicyViews.vue';
import TermsConditionsPolicy from '../views/TermsConditionsPolicyViews.vue';
import CheckOut from '../components/check-out.vue'
import FlagView from '../views/FlagViews.vue'; // Import your FlagView
import AboutPage from '../views/AboutPageView.vue';
import Failure from '../components/failure-payment.vue'
import Success from '../components/success-payment.vue'

const routes = [
  
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePageViews,
  },
  
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    path: '/refund',
    name: 'RefundPolicy',
    component: RefundPolicy,
  },
  {
    path: '/delivery',
    name: 'DeliveryPolicy',
    component: DeliveryPolicy, // Adjust the component
  },
  {
    path: '/terms',
    name: 'TermsAndConditions',
    component: TermsConditionsPolicy,
  },
  {
    path: '/flag',
    name: 'FlagView',
    component: FlagView,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/HomePage',
  },

  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut,
  },
  {
    path: "/failure",
    name: "Failure",
    component: Failure
  },
  {
    path: "/success",
    name: "Success",
    component: Success
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;