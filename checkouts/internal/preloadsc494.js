
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.8-IUM0k7.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.DCYJUHFW.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.6V5kO_Ki.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.CIUn0M0Z.js","/cdn/shopifycloud/checkout-web/assets/c1/phone-phoneCountryCode-legacy.D9T_Sr4G.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground-legacy.DvcNqXu0.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.BW3R3WiF.js","/cdn/shopifycloud/checkout-web/assets/c1/context-utilities-legacy.mk0Gl05o.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer-legacy.0lAYHTRB.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-alternativePaymentCurrency-legacy.Bqu2chrl.js","/cdn/shopifycloud/checkout-web/assets/c1/extensibility-shared-legacy.DsGM9XFx.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors-legacy.BOs0qW6H.js","/cdn/shopifycloud/checkout-web/assets/c1/purchasing-company-isValidPurchasingCompanyBillingAddress-legacy.DO-iRAuT.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound-legacy.g2-nTIqn.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion-legacy.CNfm71PW.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery-legacy.CR_1YqiX.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors-legacy.BuvYN_wB.js","/cdn/shopifycloud/checkout-web/assets/c1/types-index-legacy.0brSDEEX.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.DhQrI4qC.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.CB0asrKP.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.Dh2oiGpj.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks-legacy.CKmA4T5I.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.Dr-kp4YG.js","/cdn/shopifycloud/checkout-web/assets/c1/CrossBorderConsolidation-legacy.04SP7HeL.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.CTY_KWKO.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.w4YRGwrf.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox-legacy.B9Jpf71G.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.BcryBsgT.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index-legacy.BjqIwcx_.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.CTEvvnB6.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.B5ycb9IF.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.B4C6xCTF.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.DGn5f-nZ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod-legacy.BCUyvETP.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.h8S5X3V2.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.DEgYhzj5.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.Dql_qiyf.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useHasOrdersFromMultipleShops-legacy.DX9iK7oU.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.BDjrg0Dj.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner-legacy.b6E5_6rl.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.CcpnaKh6.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.2h-e2ZyV.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.DZlPY6mo.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit-legacy.CPMojgX-.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input-legacy.QVQFoORh.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants-legacy.DOg4HB1-.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.BjBomzac.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.DMm68ee4.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.BGQz9GoF.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.BRUqtDCN.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.BaVOHMZv.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.D7wRk_RK.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.DHzpd1dK.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.y5rHBDZH.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSubscribeMessenger-legacy.DO3pTZps.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension-legacy.DvF5_3us.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions-legacy.C167jqbc.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets-legacy.CUj9A5d0.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4-legacy.On_frbc2.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner-legacy.DWh5NDtj.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed-legacy.CNDwszUc.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour-legacy.Bkndk8ZH.js"];
      var styles = [];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/open_sans/opensans_n4.c32e4d4eca5273f6d4ee95ddf54b5bbb75fc9b61.woff2?h1=ZXlldGFtaW5zLmNv&hmac=a355e3e546a93ec9c7e1cb7d4ce0a6bc6ea5729e0ac0b834c805f6b427c83188","https://fonts.shopifycdn.com/open_sans/opensans_n6.15aeff3c913c3fe570c19cdfeed14ce10d09fb08.woff2?h1=ZXlldGFtaW5zLmNv&hmac=ef47c50c5269ee2f2a5d9808e63e47f01fed288c4253e88f549d17207bb7a6f2","https://fonts.shopifycdn.com/pt_serif/ptserif_n4.5dc26655329dc6264a046fc444eea109ea514d3d.woff2?h1=ZXlldGFtaW5zLmNv&hmac=4f65494be2e357e36020adceae2b948735af2396337082ac54f036f2558a94d0","https://fonts.shopifycdn.com/pt_serif/ptserif_n7.05b01f581be1e3c8aaf548f8c90656344869b497.woff2?h1=ZXlldGFtaW5zLmNv&hmac=41cb0186c35f052a39424728e8d88f63c0687efb984e18d4cc4ff6d57fdcd866"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0600/4903/1225/files/Eyetamins-logo-14_x320.png?v=1738555774"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  