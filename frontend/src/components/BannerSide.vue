<template>
<div id="BannerTop">
    <div id='div-banner-side-1' v-html=banner>
           
    </div>
</div>
</template>

<script>
export default {
    name: 'BannerSide',
    data() {
        return {
            name:'div-banner-side-1',
            PREBID_TIMEOUT : 1000,
            FAILSAFE_TIMEOUT : 3000,
            banner:`<script type='text/javascript'>
                window.googletag.cmd.push(
                    function() {
                        window.googletag.display('div-banner-side-1');
                    });
            `,
            adUnits : {
                    code: '/19968336/header-bid-tag-1',
                    mediaTypes: {
                        banner: {
                            sizes: [[300, 250],
                                    [300, 600]]
                        }
                    },
                    bids: [{
                        bidder: 'appnexus',
                        params: {
                            placementId: 13144370   
                        }
                    }]
                }
        }
    },
    mounted(){
        let timeoutBanner=this.FAILSAFE_TIMEOUT
        let params = this.adUnits
        let nameDiv = this.name
        let prebid_timeout = this.PREBID_TIMEOUT
        function initAdserver() {
            if (window.pbjs.initAdserverSet) return;
            window.pbjs.initAdserverSet = true;
            window.googletag.cmd.push(function() {
                window.pbjs.que.push(function() {
                    window.pbjs.setTargetingForGPTAsync();
                    window.googletag.pubads().refresh();
                });
            });
        }
        window.pbjs.que.push(function() {
            window.pbjs.addAdUnits(window.adUnits);
            window.pbjs.requestBids({
                bidsBackHandler: initAdserver,
                timeout: timeoutBanner
            });
        });
        
        window.googletag.cmd.push(function() {
            window.googletag
            .defineSlot(params.code, params.mediaTypes.banner.sizes, nameDiv)
            .addService(window.googletag.pubads());
            window.googletag.pubads().enableSingleRequest();
            window.googletag.enableServices();
        });
        
        setTimeout(() => initAdserver(), prebid_timeout);
    }
}
</script>

<style>

</style>