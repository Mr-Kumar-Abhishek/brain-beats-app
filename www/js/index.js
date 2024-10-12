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
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    cordova.plugins.foregroundService.start('Brain Beats', 'Brain Beats Syncing', 'brainbeats', 3, 10);
    // cordova.plugins.backgroundMode.enable();
}

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


