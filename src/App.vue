<template>
  <div id="app">
    <devpp-header />
    <devpp-intro />
    <devpp-navbar />
    <devpp-about />
    <devpp-members />
    <devpp-join-us class="dark-bg" />
    <devpp-meetups />
    <devpp-gallery />
    <devpp-materials />
    <devpp-palestre />
    <devpp-weekly form-action="https://tech.us17.list-manage.com/subscribe/post?u=dd95564dc86cde20bf6712519&amp;id=69e305d9aa" />
    <devpp-sponsors />
    <devpp-footer class="dark-bg" />
  </div>
</template>

<script>
import DevppHeader from './components/header/DevppHeader.vue';
import DevppIntro from './components/intro/DevppIntro.vue';
import DevppNavbar from './components/navbar/DevppNavbar.vue';
import DevppAbout from './components/about/DevppAbout.vue';
import DevppMembers from './components/members/DevppMembers.vue';
import DevppJoinUs from './components/join_us/DevppJoinUs.vue';
import DevppMeetups from './components/meetups/DevppMeetups.vue';
import DevppGallery from './components/gallery/DevppGallery.vue';
import DevppMaterials from './components/material/DevppMaterial.vue';
import DevppPalestre from './components/palestre/DevppPalestre.vue';
import DevppWeekly from './components/weekly/DevppWeekly.vue';
import DevppSponsors from './components/sponsors/DevppSponsors.vue';
import DevppFooter from './components/footer/DevppFooter.vue';

export default {
  name: 'app',
  components: {
    DevppHeader,
    DevppIntro,
    DevppNavbar,
    DevppAbout,
    DevppMembers,
    DevppJoinUs,
    DevppMeetups,
    DevppGallery,
    DevppMaterials,
    DevppPalestre,
    DevppWeekly,
    DevppSponsors,
    DevppFooter,
  }
}
</script>

<style lang="scss">
@import './app.scss';
</style>
