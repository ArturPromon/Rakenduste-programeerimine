const utils = require("./utils.js");

console.log("homepage.js loaded");

const phones = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PzAAAOSwR7pdVRLp/s-l225.webp","title":"P35 Pro Smart Phone 6.3\" HD Full Screen 128GB 4800mAh Android Face Mobile Phone","price":"$86.19","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/CjoAAOSwy2Ncm7XJ/s-l225.webp","title":"Samsung galaxy a50 2019 Black 4g 6.4\" 128 GB 4gb RAM Dual SIM guarantee Italy 24","price":"$287.22","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/iEMAAOSwkYxdX7C3/s-l225.webp","title":"P35 Pro 6.3\" Drop Screen Dual SIM 6GB+128GB Black Touch Smart Mobile Phone New","price":"$83.72","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mawV4Vr6Vli2ekunY37A2UA/s-l225.webp","title":"S9 Big Screen 5.7\" Inch LTE Smartphone Dual SIM Android 6.0 Mobile Phone GPS SD","price":"$40.32 to $47.34","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mKsA5dslmEYuPhZnpQgQz9w/s-l225.webp","title":"Apple iPhone 7 Unlocked 32GB 128GB 256GB Grade A","price":"$178.49 to $277.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m2MhVGgj9y5yHrRMrG-2slA/s-l225.webp","title":"S10 Unlocked Android 9.1 Smartphone Octa Core Cell Phone 4GB+64GB 8MP+16MP 6.1\"","price":"$64.84","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jvgAAOSwopVcsNXm/s-l225.webp","title":"XiaoMI REDMI NOTE 7, 4GB+64GB ,ESPAÑA VERSION, Camara 48 MpX , Snapdragon 660","price":"$176.70","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mSzwbaAnA-xgQ0d1LvGEmAg/s-l225.webp","title":"SPONSOREDXiaomi Mi 9T 6.39\" 4G Mobile Smartphone Octa Core 6+64/128GB Snapdragon 730 48MP","price":"$314.12","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mcJSi_mYlK5gGVZYaW9g04g/s-l225.webp","title":"SPONSOREDS10+ 6.5\"Android Smartphone 6GB+128GB Face Fingerprint Recognition Dual Unlocked","price":"$104.49","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mXTpjM2IkhaV42fWXBs4Ldg/s-l225.webp","title":"X27/X27 Plus Unlocked Smartphone 5.0/5.7'' Android 8.0 Dual SIM Mobile Phone","price":"$55.40","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/iS4AAOSw6S5dVDNo/s-l225.webp","title":"P35 Pro 6.3\" Drop Screen 6G 128G 8 16MP Face Fingerprint Recognition Smartphone","price":"$78.57","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m3N5pHdyMUR_Ars5CISlsEg/s-l225.webp","title":"X27 Plus Smartphone 6.3'' Android 9.1 Dual SIM  Mobile Phone Face Unlock 6+128g","price":"$92.96 to $93.57","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aE8AAOSw9aJdOb99/s-l225.webp","title":"Smartphone xiaomi mi a3 6.09''hd+ oc 4gb/64gb 4g-lte 32/48+8+2mpx a8.1 blue","price":"$198.84","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mZegC7uQFjHkbdCHOCfhzNw/s-l225.webp","title":"P20 Pro 6.1\" HD Octa-Core Smartphone 4G+64G Dual SIM&Camera 16MP Mobile Phone","price":"$36.93 to $73.87","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mDIIrW2OLFc6dRUI7Fkn8Og/s-l225.webp","title":"New Unlocked Smartphone Apple iPhone 6s 128GB 32GB 64GB Sim Free Rose Gold UK","price":"$182.19 to $228.98","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mf01AjU1VoEWA-_w8dPC7-Q/s-l225.webp","title":"P30 PRO 6.3'' Android 9.0 Phone 6GB+256GB Dual SIM Smartphone Free TF Card 128G","price":"$94.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/muWh1HvkuGDehM03AhPvqGA/s-l225.webp","title":"SPONSOREDApple iPhone 8 - 64GB - 256GB - Unlocked - Various Colours Mobile Smartphone","price":"$449.07 to $515.56","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m2GXxvgIK0r29GZBPimxYHg/s-l225.webp","title":"SPONSOREDAPPLE iPHONE 5C 8GB/16GB/32gb  - Unlocked/locked blue ,White,Green.Yellow Phone","price":"$55.40 to $86.19","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3ToAAOSw6hldcahb/s-l225.webp","title":"New ListingGoogle Pixel - 32GB - Very Silver (Unlocked) Smartphone","price":"$100.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mtnGJ90AJ85zHKyLFyzt_FA/s-l225.webp","title":"P30 PRO Under Screen/Face Unlocked 6.3'' Android 8.0 Dual SIM Smartphone ","price":"$79.89","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m12kCp9wObyGaf_vVRKhHcw/s-l225.webp","title":"Smart Phone Nova 5 Android 6.3″ Dual-SIM 8 Core Face Fingerprint Unlocked 4G","price":"$81.87","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/t90AAOSwdxdc~mVf/s-l225.webp","title":"Samsung galaxy a20e Blue Dual SIM 5.8\" 32gb 4g 24 months guarantee Italy","price":"$165.70","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mbcftEArtbfZsy2UKDxqj1w/s-l225.webp","title":"5.0\" 4G + 32G Android 6.0 3G Dual SIM & Camera GPS Smartphone WIFI Bluetooth X3","price":"$33.80 to $37.97","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/maYSZI9rc1r1F4ImJtgTGVA/s-l225.webp","title":"Unlocked 5\" GSM Cell Phone Dual Sim Android 6.0 Smartphone Mobile GPS Face ID","price":"$34.88 to $36.72","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m40nSfe9PW_v4hM_l0EUiRQ/s-l225.webp","title":"Unlocked Mini Rugged Cheap Mobile Phone Shockproof Dual Sim Flashlight Bluetooth","price":"$14.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/u2oAAOSwytpc9TRH/s-l225.webp","title":"Google pixel 2 64gb just black, novelty, screen burn","price":"$152.61","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/etgAAOSwYX9dLCZ7/s-l225.webp","title":"Samsung Galaxy Note 2, 5.5inch Grade A opened never used,16GB 3G mobile phone UK","price":"$97.16","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mgucPxCOdsleEHTbpRexx6A/s-l225.webp","title":"P35 Pro SmartPhone 6.3\" HD Full Screen 4800mAh Android 9.1 Face ID Mobile Phone","price":"$84.95 to $85.57","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/FE0AAOSwRaJdWm2X/s-l225.webp","title":"Google pixel 2 XL 64GB just black, mint condition, screen burn - in","price":"$175.66","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mpMI3vWsAJ4W3ASbSm4L_UQ/s-l225.webp","title":"M20 Pro 4+32g Unlocked 5.8'' Android 8.0 Dual-SIM Smartphone Mobile Phone","price":"$41.13","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mO1nuMw-_A1ngtKyLpenzBw/s-l225.webp","title":"P36 Pro 6.3\" Drop Screen 6G+128G /8+16MP Face Fingerprint Recognition Smartphone","price":"$77.47","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/A-wAAOSwaAlcj5Fn/s-l225.webp","title":"SPONSOREDMicrosoft LUMIA 950 XL - 32GB-Black (without Simlock) Smartphone","price":"$98.32","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mJd4bvFwoeBTQNwRT_ZJabw/s-l225.webp","title":"SPONSOREDSamsung Galaxy S7 SM-G930F - 32GB - (Unlocked) Smartphone Various Colours New","price":"$209.33 to $221.64","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/feIAAOSwjFZc~jj3/s-l225.webp","title":"Honor 8s Black Dual Sim 32 GB Rom, 2 GB RAM, 24 months guarantee Italy","price":"$127.04","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mmlcC70_hPHtouA3WqziBgw/s-l225.webp","title":"X27 Plus Smartphone 6.3'' Android 9.1 Dual SIM Mobile Phone Face 6G+128G Unlock","price":"$73.87","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4fcAAOSwrSpdQYhB/s-l225.webp","title":"XiaoMI REDMI NOTE 7,4GB+64GB,ESPAÑA VERSION,ROSA CAMARA 48MpX,Snapdragon 660","price":"$184.48","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/H7oAAOSwnBpc~33K/s-l225.webp","title":"Lenovo K9 4G 32GB Android 8.1 Smartphone Handy ohne Vertrag Octa Core Unlocked","price":"$132.56","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mrfow6PxGPUFCXp-Mfnt2hw/s-l225.webp","title":"S10 6.1\" Unlocked Android 9.1 Smartphone Octa Core Cell Phone 4GB+64GB 8MP+16MP","price":"$67.01","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m2NYLE2KXs7HHg9E_HykVdw/s-l225.webp","title":"6.3\" Unlock Smartphone P35 Pro HD Full Screen Face ID Android 9.1 3G Cell Phone","price":"$81.17 to $92.96","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7PwAAOSwv8ZdaO7g/s-l225.webp","title":"A18 Rugged SmartPhone Android 3G Zello PTT UHF Walkie Talkie Waterproof Phone","price":"$78.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mMaBURf3s_NvhWtooYgv4UA/s-l225.webp","title":"P30 pro 4+32g Face Unlocked 6.3'HD Android 9.0 Octa Core Dual-SIM Smartphone","price":"$70.09","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/nm4AAOSwgW9ctdeI/s-l225.webp","title":"Samsung galaxy a40 64gb Dual Sim Black 24 months guarantee Italy","price":"$209.89","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mZWuWormyo9z08inxiMAjvA/s-l225.webp","title":"Factory Unlocked  6.0 Inch Android 8.0 Mobile Phones Quad Core Smart Cell Phone","price":"$50.30","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mmSh55Ch8lV_vcayq2-LyIA/s-l225.webp","title":"6\" 3G Android 7.0 Unlocked Cell Phone Quad Core Dual SIM 3G T-Mobile Smartphone","price":"$56.99 to $60.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/F14AAOSwSYtddTdd/s-l225.webp","title":"New ListingHonor 9 Lite 5,65\" Smartphone with Android 9","price":"$80.59","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mEKsfAuch8zwsWdcpv90M5g/s-l225.webp","title":"Older Mobile Phone 3.0\" Dual Screen Flip Mobile Phone Dual Sim MP3 MP4 FM 3G","price":"$51.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/moNoDtIorUp7m_imEq72Whw/s-l225.webp","title":"P30 PRO Android Smartphone 6Gb+128Gb Face Fingerprint Recognition Mobile Phone","price":"$85.49","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mDPBK_ZOg0Lz9hTgRn2o4iQ/s-l225.webp","title":"M20 Pro 5.8'' Android Dual-SIM Smart Mobile Phone Face/Fingerprint Unlocked New","price":"$38.39","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mwdo7ELyjMOpaRgP4x-LwxA/s-l225.webp","title":"Unlocked LAND ROVER X2 4G LTE Rugged Android Smartphone Mobile Phone Waterproof","price":"$129.28","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/msBnAJDgyqMp2F6sU9GydHA/s-l225.webp","title":"P31 pro 6+128g Face Unlocked 6.3'HD Android 9.1 Octa Core Dual-SIM Smartphone","price":"$82.89","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m9kT3JGyklD_h8z2Ahfa6-Q/s-l225.webp","title":"XIAOMI MI A3 BRAND NEW SEALED FACTORY UNLOCKED ORIGINAL GLOBAL VERSION ","price":"$220.42 to $245.05","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aCoAAOSw4QVddMxf/s-l225.webp","title":"New ListingRugged Android Phone - Unlocked Android 5.1","price":"$80.04","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5osAAOSwcbRddTOe/s-l225.webp","title":"New ListingSmartphone Yandex Phone 4/64Gb 5.65\" 3050mAh NFC 2xSIM-card(128Gb) microSD Black","price":"$269.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mVDA4CHbsxa9dMBJImmgxkQ/s-l225.webp","title":" 6.0 4GB Quad Core Dual 4G SIM Cell Phone 5.0'' M10 Unlocked Android Smart Phone","price":"$42.57","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mIVK8SBLBNdfhERCxfr9okg/s-l225.webp","title":"SPONSOREDAPPLE iPHONE 6 16GB / 64GB / 128GB - Unlocked / Voda -  Smartphone Mobile Phone ","price":"$104.67 to $158.85","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/r2AAAOSwJppdboAj/s-l225.webp","title":"SPONSOREDXiaomi mi a3 4/64gb global version","price":"$195.43","category":"phones"}];
const laptops = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/luwAAOSwQhNdWX4H/s-l225.webp","title":"New ListingDell Laptop - E7240 - i7 - 16GB Ram + Dell Dock","price":"$1.22","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kT0AAOSwgS9dWXzl/s-l225.webp","title":"New ListingDell Laptop - E7240 - i7 - 16GB Ram + Dell Dock","price":"$6.77","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/1h0AAOSwLVtdb9gY/s-l225.webp","title":"New ListingHP Pavilion 15-cw0995na 15.6\" Full HD Laptop AMD Ryzen 3, VEGA 8GB RAM 128GB SSD","price":"$301.69","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ga8AAOSwiFNdGhOQ/s-l225.webp","title":"Lenovo laptop 15,6\" Laptop AMD a4 4gb ddr4 500gb Webcam Windows 10","price":"$231.89","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/CyYAAOSwk75dWXWa/s-l225.webp","title":"New ListingDell Laptop - E7270 - 2.6GHz i7 - 16GB Ram + Dell Dock","price":"$123.14","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~OkAAOSwhEhcSusV/s-l225.webp","title":"Lenovo ThinkPad X1 Carbon Laptop Core i7 4600U 240GB SSD 8GB RAM W10 Ultrabook","price":"$344.78","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mwxHoevkD97TuJCa90bEuTQ/s-l225.webp","title":"CHEAP LAPTOP Dell Latitude Core i5 / i3 8GB Ram 128GB SSD  Win 10 HDMI","price":"$71.41 to $221.64","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mkjnu3zdSDEdMgANmi-BhWA/s-l225.webp","title":"SPONSOREDCHEAP HP Elitebook  LAPTOP WINDOWS 7 4GB Ram 250GB HDD 14 Screen WiFi","price":"$98.50 to $135.44","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mZ6b8txf_SIt8yXHlDdO2vQ/s-l225.webp","title":"SPONSORED14.1\" inch CHEAP Laptop Intel Core i3 i5 4GB 8GB Ram 320GB 500GB HDD Wi-Fi Win10","price":"$86.19 to $158.84","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/igIAAOSwaPNcCpw5/s-l225.webp","title":"Portable PC Laptop Notebook HP 255 g6 1wy10ea 15,6\" 4gb 500gb Webcam Windows 10","price":"$237.41","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ASkAAOSwYThdYTan/s-l225.webp","title":"New ListingDell Latitude E5540 Laptop, Core i5-4th Gen, 6GB RAM, 500GB HDD, Windows 10 Pro.","price":"$123.14","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mrxzRXmCdcrzYQrsKLMd0MQ/s-l225.webp","title":"CHEAP Toshiba Core 2 Duo LAPTOP WINDOWS 7 10 2GB 4GB RAM 14\" WiFi Warranty","price":"$86.19 to $172.38","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/muvD0r6w5EQEWZG9_MLXIoQ/s-l225.webp","title":"Cheap Fast Lenovo ThinkPad Office Laptop X240 i5 8GB Ram 1TB HDD/SSD Windows 10","price":"$160.07 to $307.84","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/dVsAAOSw1WVddSxo/s-l225.webp","title":"New ListingRazer Blade Stealth 13.3\" (512GB, Intel Core i7, 2.70 GHz, 16GB) Laptop -...","price":"$250.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/pioAAOSwQo9cjtq6/s-l225.webp","title":"Dell Gaming Laptop E5520 15.6\" Intel Core i3 2.20Ghz Win 10 HDMI 160gb hd....","price":"$98.51","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/myAyqwf5_I1ekfeiqDiO6qA/s-l225.webp","title":"HP EliteBook 820 G1 12.5\" Laptop Intel i5-4300u 1.9GHz 4th gen - Options ","price":"$110.81 to $301.68","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/a1IAAOSwVotctzBZ/s-l225.webp","title":"SPONSOREDWindows 10 14.1” Inch Slim Cheap Quad Core Solid State Laptop Notebook 160GB ","price":"$160.07","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kVsAAOSwokVdHb8D/s-l225.webp","title":"SPONSOREDCheap Acer Iconia W510p 2 in 1 Tablet Laptop Intel Z2760 1.80GHz 2GB 64GB Win 10","price":"$83.09","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/k2cAAOSwGsxda9L~/s-l225.webp","title":"New ListingAsus X541u Laptop","price":"$153.93","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m9KckRM4VQwXdFHh41nFESA/s-l225.webp","title":"FAST CHEAP INTEL CORE i3/ i5/ i7 LAPTOP WINDOWS 7/10 250GB/500GB HD 4GB/8GB RAM","price":"$71.41 to $160.07","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mCO2kRACuOqLGN0nigew_-Q/s-l225.webp","title":"Cheap Fast Laptop LENOVO X250 12.5\" CORE i5-5300U 5th GEN 8GB 128GB SSD@2.30 GHz","price":"$184.70","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/oxQAAOSwRiFcngjW/s-l225.webp","title":"Lenovo Thinkpad X230 Laptop Intel Core i5 3320M 2.50GHz 4GB Ram WIFI-320gb","price":"$134.22","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kRQAAOSwtLpdVS6n/s-l225.webp","title":"New ListingLenovo ThinkPad T470s, 8 GB, 240 GB M.2 SSD Intel Win10 onsite warranty!","price":"$1.10","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sXsAAOSwT8FdYoLC/s-l225.webp","title":"New ListingDell Inspiron 11 11.6 inch(29.1 GB, AMD A6-9220E, 4 GB) Laptop - Gray -...","price":"$185.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mGnMKG2uA7b_lvCZbGySAVg/s-l225.webp","title":"CHEAP DELL HP FUJITSU CORE i5/i3 LAPTOP 16GB/8GB 1TB/500GB WiFi Win10/7 WARRANTY","price":"$80.03 to $166.23","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/pBQAAOSwCfddcsmx/s-l225.webp","title":"New ListingDell Latitude E6400 Laptop 4GB Win 7","price":"$40.64","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8p4AAOSwQYZWukvO/s-l225.webp","title":"New ListingHP PAVILION ZD7000 LAPTOP 17\" COMPUTER-3.4 Ghz(2.0 Gb ram)80 gig H, Win 7 home","price":"$149.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/vS0AAOSwpo5cr3zW/s-l225.webp","title":"New ListingHP ProBook 6570b Laptop 500GB HD 8GB RAM i5 15.6\" Windows 10 Pro 64 NEW BATTERY ","price":"$149.95","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/lc0AAOSw73ZdX9gh/s-l225.webp","title":"New ListingCapable Windows 10 Fujitsu Laptop--Webcam + 160GB HD +4GB RAM-SALE--£64.99 (J2)","price":"$80.03","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/T~8AAOSw7fVdaAc9/s-l225.webp","title":"New ListingHP EliteBook 8560p Laptop 15.6 128GB SSD 8GB RAM i5 2.5 DVD Webcam NEW Battery!!","price":"$174.95","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ZGQAAOSwoR9ddTr4/s-l225.webp","title":"New ListingDell Latitude E7450 14\" i5 256GB SSD (Ultrabook Performance) 8GB RAM W/Webcam","price":"$189.99","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jVEAAOSwqbZdH3Ij/s-l225.webp","title":"SPONSOREDAcer Iconia w701 2 in 1 Windows 10 Tablet Laptop Intel i3 1.90GHz 4GB 120GB","price":"$116.97","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WigAAOSwSzZc~x1y/s-l225.webp","title":"SPONSOREDCHUWI HeroBook 14.1\" Laptop Windows 10 Intel Quad Core Notebook PC 4GB+64GB","price":"$199.99","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/bDEAAOSwwZtdJgYK/s-l225.webp","title":"Laptop Notebook Gaming Game Refurbished quad core a8 8gb SSD 240gb Win 10","price":"$220.84","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7lkAAOSwYCRdR4tH/s-l225.webp","title":"New ListingLenovo Thinkpad P50 Laptop, Intel i7-2.7ghz.-6820HQ, 16gb, 512gb SSD, Warranty!","price":"$675.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mn1Twg0-bMC5ffTahSTEIMg/s-l225.webp","title":"Fujitsu Lifebook QUAD CORE E754 Core i5-4210M 4th Gen 12GB Laptop 15.6 Win 10 ","price":"$178.55 to $307.23","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/BXUAAOSwiwZcRtCI/s-l225.webp","title":"Laptop HP 1wy10ea 255 g6 AMD 4gb RAM 500gb HDD windows 10 NEW Warranty!","price":"$235.86","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LfgAAOSwlWZddLuL/s-l225.webp","title":"New ListingUpgraded Capable Windows 10 Lenovo Laptop--320GB HD +4GB RAM--FAST FREE P&P (A2)","price":"$98.50","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/anIAAOSwWVtdcErZ/s-l225.webp","title":"New ListingHP 14-cm0065st 14\" Laptop (AMD A9-9425 7th Gen, 4GB RAM, 128GB SSD, Win 10) NEW","price":"$364.99","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/tjUAAOSwHGxdJFTq/s-l225.webp","title":"NEW PC Laptop Notebook HP 6hm00ea 255 g7 AMD 4gb RAM 500gb Windows 10 Pro","price":"$241.83","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/AjUAAOSwHDdczEYS/s-l225.webp","title":"New ListingToshiba Satellite Pro C660-21E Laptop i3-370m WINDOWS 10","price":"$36.93","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/HukAAOSw135ddP3e/s-l225.webp","title":"New ListingHuawei Matebook D 15.6 Inch Intel i3 3GHz 8GB 256GB SSD Windows Laptop - Grey","price":"$430.99","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mbbrduiI8slLJDj_GbCdd7Q/s-l225.webp","title":"NEW HP 15-BS289WM Laptop Touchscreen Laptop Intel Pentium N5000 ","price":"$309.99 to $649.99","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/H80AAOSwyVRda8jM/s-l225.webp","title":"New Listing*NEW* Dell 13.3\" Full HD Laptop Intel i5 3.5 GHz 256GB SSD 8GB RAM Backlit Keys!","price":"$899.95","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rtUAAOSwgrZcUF-W/s-l225.webp","title":"New ListingAcer One 10 Laptop","price":"$86.19","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xGYAAOSwPQBdUezQ/s-l225.webp","title":"New ListingAsus UX410U 14\" Laptop Core i5-7200 2.50 GHz 8GB RAM 128GB SSD 1TB HDD","price":"$615.69","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kskAAOSwLDddZon5/s-l225.webp","title":"HP Probook 6570b Core i5-3210M 2.5GHz 4GB 320GB HDD 15.6\" Win 7 Laptop Notebook","price":"$116.98","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/zhMAAOSwdxlddTYg/s-l225.webp","title":"New ListingDell Latitude E6500 Notebook Laptop Windows 10 Pro","price":"$1.10","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/iegAAOSwraNdJxY~/s-l225.webp","title":"Dell Precision M6700 i7-3940XM Extreme 4x3, 0GHz Intel HD 8GB 250GB TB RW W10 B12","price":"$440.80","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sqAAAOSwr~9dZPtR/s-l225.webp","title":"Lenovo ThinkPad T460 Intel Core i5 6300U 2*2, 4 GHz, 8 GB, 256 GB SSD, WIN10, FHD","price":"$385.56","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/B5QAAOSwsUVddR7G/s-l225.webp","title":"New ListingSamsung laptop 15.6 i3 2.40GHz, 8GB, 250GB SSD + CD Drive","price":"$246.28","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cT4AAOSwHppddRnZ/s-l225.webp","title":"New ListingHP Elitebook 8770W i7- 2.9Ghz 16GB 17\" Nvidia Quadro K3000M Win-10 Laptop","price":"$430.99","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mx0FJonQz-X6U35eK-GijQg/s-l225.webp","title":"Dell Latitude E5440 INTELCore I5-4310U ,14\"Laptop 8GB RAM 240GB SSD, Wind10 Pro","price":"$172.38 to $184.70","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/r7cAAOSwxcZddRPr/s-l225.webp","title":"New ListingLENOVO G505S LAPTOP WINDOWS 10 AMD A10 WEBCAM 4GB 500GB 15.6\" HDMI GRADE C 14414","price":"$55.41","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Z4sAAOSwuxRdc3da/s-l225.webp","title":"SPONSOREDNotebook Laptop Samsung NP-R540 500GB HDD 4GB RAM is Win10 15,6 Inch Office 13 Top","price":"$208.80","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mqsAAOSw6S9cSZOE/s-l225.webp","title":"SPONSOREDLenovo ThinkPad X230 i5 2.60GHz 4GB 500GB HDD 1366x768 WiFi Cam BT Win10/7 Pro","price":"$146.82","category":"laptop"}];

const categories = {
  PHONE: "phones", // plural because it is like that in phones array :/
  LAPTOP: "laptop",
};

// initial state
let selectedCategory = categories.PHONE;

function createItems(){

  const root = document.getElementById("item-list");

  root.innerHTML = null; // reset

  let items = [];

  if(selectedCategory === categories.PHONE){
    items = phones;
  }
  else if(selectedCategory === categories.LAPTOP){
    items = laptops;
  }

  console.log("items", items);

  items.forEach((item)=>{
    const element = utils.createItemElement(item);

    console.log("root", root);
    root.append(element);
  });
}

function setupCategoryListener(){
  const dropdown = document.getElementById("category-dropdown");
  dropdown.addEventListener("change", (event) => {
    console.log(event.target.value);
    selectedCategory = event.target.value;
    createItems();
  });
}

function setup(){
  // only homepage
  const root = document.getElementById("item-list");
  if(!root) return;

  createItems();
  setupCategoryListener();
}

module.exports = {
  setup,
};
