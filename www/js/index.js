/*
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
let banner;

document.addEventListener('deviceready', onDeviceReady, false);

async function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  await admob.start();
  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

  /* Your code. (Make sure to not alert(status) until splashscreen
    * has been hidden with navigator.splashscreen.hide() 
    * else alert might not show and your app seems to stall.)
    */
  let permissionPlugin = window.cordova.notifications_permission;
  let rationaleTitle = "Notification Permission";
  let rationaleMsg = "You really need to give permission!";
  let rationaleOkButton = "OK";
  let rationaleCancelButton = "Not now";
  let rationaleTheme = permissionPlugin.themes.Theme_DeviceDefault_Dialog_Alert;
  let lastResortTitle = "Notification Permission!";
  let lastResortMsg = "You really need to give permission! Now the only way left is through system settings.";
  let lastResortOkButton = "Settings";
  let lastResortCancelButton = "No thanks";
  let lastResortTheme = permissionPlugin.themes.Theme_DeviceDefault_Dialog_Alert;
  permissionPlugin.maybeAskPermission(
    function (status) {
      /* Permission is either granted, denied, or not needed. */
      switch (status) {
        case permissionPlugin.GRANTED_NEWLY_WITHOUT_RATIONALE:
        case permissionPlugin.GRANTED_NEWLY_AFTER_RATIONALE:
        case permissionPlugin.GRANTED_NEWLY_AFTER_SETTINGS:
        case permissionPlugin.GRANTED_ALREADY:
        case permissionPlugin.NOT_NEEDED:
          /* Notification shows the same as it did before Android 13 (API Level 33). */
          cordova.plugins.backgroundMode.enable();
          break;
        case permissionPlugin.DENIED_NOT_PERMANENTLY_NEWLY:
        case permissionPlugin.DENIED_PERMANENTLY_NEWLY:
        case permissionPlugin.DENIED_NOT_PERMANENTLY_ALREADY:
        case permissionPlugin.DENIED_PERMANENTLY_ALREADY:
        case permissionPlugin.DENIED_PERMANENTLY_ALREADY_AFTER_SETTINGS:
        case permissionPlugin.DENIED_THROUGH_RATIONALE_DIALOG:
        case permissionPlugin.DENIED_THROUGH_LAST_RESORT_DIALOG:
        case permissionPlugin.NOT_ANDROID:
          /* The notification does not show. */
          break;
        case permissionPlugin.ERROR:
          /* See console for error message */
          break;
      }
    },
    {
      show: true,
      title: rationaleTitle,
      msg: rationaleMsg,
      okButton: rationaleOkButton,
      cancelButton: rationaleCancelButton,
      theme: rationaleTheme
    },
    {
      show: true,
      title: lastResortTitle,
      msg: lastResortMsg,
      okButton: lastResortOkButton,
      cancelButton: lastResortCancelButton,
      theme: lastResortTheme
    }
  );
  banner = new admob.BannerAd({
    adUnitId: 'ca-app-pub-3940256099942544/6300978111',
    position: 'bottom'
  })
  console.log(banner);
  banner.on('impression', async (evt) => {
    // await banner.hide();
    console.log("Ad Impression");
  })

  await banner.load();
  await banner.show();


  function destroyBannerAd() {
    if (banner) {
      banner.hide();
      console.log('AdMob Banner destroyed');
    }
  }
  window.addEventListener('beforeunload', destroyBannerAd);
}

/*

// example code of ads 

let banner
console.log("device prepared from index");
document.addEventListener('deviceready', async () => {
  
  banner = new admob.BannerAd({
    adUnitId: 'ca-app-pub-3940256099942544/6300978111',
  })

  banner.on('impression', async (evt) => {
    await banner.hide()
  })

  await banner.show()
}, false)

navigator.splashscreen.hide();


*/