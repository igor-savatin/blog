<template>
<div id="BannerTop">
    <iframe id="Lollis" FRAMEBORDER="0"
            SCROLLING="no"
            MARGINHEIGHT="0"
            MARGINWIDTH="0"
            TOPMARGIN="0" 
            LEFTMARGIN="0" 
            ALLOWTRANSPARENCY="true"
            WIDTH="0"
            HEIGHT="0">
        
    </iframe>
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
            // banner:`<script type='text/javascript'>
                
            // `,
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
        // let nameDiv = this.name
        let prebid_timeout = this.PREBID_TIMEOUT
        function initAdserver() {
            let iframe = document.getElementById('Lollis');
            let iframeDoc = iframe.contentWindow.document;
            let adServerTargeting = window.pbjs.getAdserverTargetingForAdUnitCode('/19968336/header-bid-tag-1');

            // If any bidders return any creatives
            if (adServerTargeting && adServerTargeting['hb_adid']) {
                window.pbjs.renderAd(iframeDoc, adServerTargeting['hb_adid']);
            } else {
                iframe.width = params.mediaTypes.banner.sizes[0][0];
                iframe.height = params.mediaTypes.banner.sizes[0][1];
                // iframeDoc.write('<head></head><body>' + passbackTagHtml + '</body>');
                iframeDoc.write('<head></head><body>Deu ruim</body>');
                iframeDoc.close();
            }
        }
        window.pbjs.que.push(function() {
            window.pbjs.addAdUnits(params);
            window.pbjs.requestBids({
                bidsBackHandler: initAdserver,
                timeout: timeoutBanner
            });
        });
        
        
        // setTimeout(() => initAdserver(), prebid_timeout);
    }
}
</script>

<style>

</style>