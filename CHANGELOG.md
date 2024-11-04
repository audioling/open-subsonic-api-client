# Changelog

## [3.0.4](https://github.com/audioling/open-subsonic-api-client/compare/v3.0.3...v3.0.4) (2024-11-04)


### Bug Fixes

* add 'highest' type to getAlbumList2 ([f107eca](https://github.com/audioling/open-subsonic-api-client/commit/f107ecafbef771cd2c6ae41387e3f0a5479d0497))

## [3.0.3](https://github.com/audioling/open-subsonic-api-client/compare/v3.0.2...v3.0.3) (2024-10-02)


### Bug Fixes

* fix getAlbum response to include song ([f3f54c3](https://github.com/audioling/open-subsonic-api-client/commit/f3f54c36272a6af79d414730564d49346152e2ea))

## [3.0.2](https://github.com/audioling/open-subsonic-api-client/compare/v3.0.1...v3.0.2) (2024-10-02)


### Bug Fixes

* additional fix to ts-rest type inference on all endpoints ([601b405](https://github.com/audioling/open-subsonic-api-client/commit/601b405bfd337ba98ea58895639c37b9dce74246))

## [3.0.1](https://github.com/audioling/open-subsonic-api-client/compare/v3.0.0...v3.0.1) (2024-10-02)


### Bug Fixes

* fix ts-rest type inference on all endpoints ([6a8ce65](https://github.com/audioling/open-subsonic-api-client/commit/6a8ce65a9c1fef9e1a0e787d7515830d7abc442b))

## [3.0.0](https://github.com/audioling/open-subsonic-api-client/compare/v2.0.6...v3.0.0) (2024-10-01)


### ⚠ BREAKING CHANGES

* add versioned endpoints

### Bug Fixes

* replace api version 1.16.0 -&gt; 1.16.1 ([3f88d03](https://github.com/audioling/open-subsonic-api-client/commit/3f88d0349f06f61fbf7b2f919b8e2d37fea2d537))


### Code Refactoring

* add versioned endpoints ([b764521](https://github.com/audioling/open-subsonic-api-client/commit/b7645211b698bf6985db8ce1a25211ee16aea556))

## [2.0.6](https://github.com/audioling/open-subsonic-api-client/compare/v2.0.5...v2.0.6) (2024-09-30)


### Bug Fixes

* handle potential undefined objects on response ([c29f7ec](https://github.com/audioling/open-subsonic-api-client/commit/c29f7ec9a1b9453fd50fd0e3cc3ad4aa1ddb97c0))

## [2.0.5](https://github.com/audioling/open-subsonic-api-client/compare/v2.0.4...v2.0.5) (2024-09-27)


### Bug Fixes

* add missing fields in album schema ([c6a843c](https://github.com/audioling/open-subsonic-api-client/commit/c6a843c7148d5a2fd19e5286fe9b1cdc08fb5730))

## [2.0.4](https://github.com/audioling/open-subsonic-api-client/compare/v2.0.3...v2.0.4) (2024-09-27)


### Bug Fixes

* fix starred value on album response schema ([a8b3553](https://github.com/audioling/open-subsonic-api-client/commit/a8b35532113c6dc924e07e743ea00b8752471578))

## [2.0.3](https://github.com/audioling/open-subsonic-api-client/compare/v2.0.2...v2.0.3) (2024-09-26)


### Bug Fixes

* fix request schema for getArtist ([5cd6f10](https://github.com/audioling/open-subsonic-api-client/commit/5cd6f10017257842852a5a346d0ce339276ac073))

## [2.0.2](https://github.com/audioling/open-subsonic-api-client/compare/v2.0.1...v2.0.2) (2024-09-21)


### Bug Fixes

* fix artist schema ([ffdb73d](https://github.com/audioling/open-subsonic-api-client/commit/ffdb73d688977df6e6b0cd32bab0d0b4914698bc))

## [2.0.1](https://github.com/audioling/open-subsonic-api-client/compare/v2.0.0...v2.0.1) (2024-09-21)


### Bug Fixes

* fix response type of getArtist ([3280f8d](https://github.com/audioling/open-subsonic-api-client/commit/3280f8dd2e90ad7fbab7dc62ba6bfef82f6f2c6e))

## [2.0.0](https://github.com/audioling/open-subsonic-api-client/compare/v1.3.0...v2.0.0) (2024-09-21)


### ⚠ BREAKING CHANGES

* refactor api contract format

### Features

* add changePassword endpoint ([3ee82ee](https://github.com/audioling/open-subsonic-api-client/commit/3ee82ee065c658a755025261f8ccc06c98c830c1))
* add createShare endpoint ([386ee7c](https://github.com/audioling/open-subsonic-api-client/commit/386ee7cae056bca684092d59a6ac683ac064e910))
* add createUser endpoint ([2155159](https://github.com/audioling/open-subsonic-api-client/commit/21551593968fc2c3b7374e84a6398ae5b7ac5e6f))
* add deleteShare endpoint ([8aeef7c](https://github.com/audioling/open-subsonic-api-client/commit/8aeef7c71179781d8c21bb67a72aec347a55f605))
* add deleteUser endpoint ([4ad10b2](https://github.com/audioling/open-subsonic-api-client/commit/4ad10b2ccb391dff1c52899bf454828ece83c806))
* add getArtist endpoint ([25ef70d](https://github.com/audioling/open-subsonic-api-client/commit/25ef70df676539be06f0f7552a93b0198d7c03f4))
* add getLyrics endpoint ([9d29b18](https://github.com/audioling/open-subsonic-api-client/commit/9d29b181a20b1e1920adc9b1a58f4e7205af951f))
* add getScanStatus endpoint ([7e33116](https://github.com/audioling/open-subsonic-api-client/commit/7e3311614312d5f9036ed0bd45d5a75df113a9dd))
* add getUser endpoint ([e61cfdb](https://github.com/audioling/open-subsonic-api-client/commit/e61cfdb038dbb9ee03f9514dd31cba2c2ea95b9a))
* add getUsers endpoint ([ddbd2b0](https://github.com/audioling/open-subsonic-api-client/commit/ddbd2b01c6cc1f7854f18e3d5623a60b71812379))
* add startScan endpoint ([665e31b](https://github.com/audioling/open-subsonic-api-client/commit/665e31b1ebfda74c94e33a34145332ce594b0014))
* add test to check missing endpoints ([9143688](https://github.com/audioling/open-subsonic-api-client/commit/9143688b37842a6e12a8d8fcd683e6a0d3583697))
* add updateShare endpoint ([6fca407](https://github.com/audioling/open-subsonic-api-client/commit/6fca407cf4ba820b9e6580d7d2ca90b1686cf75f))
* add updateUser endpoint ([054d675](https://github.com/audioling/open-subsonic-api-client/commit/054d675642e23dd5cfee49452d27d6a09e2e26e9))
* refactor api contract format ([211f9fc](https://github.com/audioling/open-subsonic-api-client/commit/211f9fce21da81dd9698337416832ed3dd2f2508))

## [1.3.0](https://github.com/audioling/open-subsonic-api-client/compare/v1.2.2...v1.3.0) (2024-09-20)


### Features

* export ts-rest helper types ([3c04d95](https://github.com/audioling/open-subsonic-api-client/commit/3c04d9588a385b21acb15716ce9f14987f304338))

## [1.2.2](https://github.com/audioling/open-subsonic-api-client/compare/v1.2.1...v1.2.2) (2024-09-16)


### Bug Fixes

* fix ci step ([b15445e](https://github.com/audioling/open-subsonic-api-client/commit/b15445e6e04dd2191c1dbfcb3159261b544b5abd))

## [1.2.1](https://github.com/audioling/open-subsonic-api-client/compare/v1.2.0...v1.2.1) (2024-09-16)


### Bug Fixes

* add build step to ci ([11a6d19](https://github.com/audioling/open-subsonic-api-client/commit/11a6d19bff82ef8527e92e87c631f4dfc2a453b2))

## [1.2.0](https://github.com/audioling/open-subsonic-api-client/compare/v1.1.0...v1.2.0) (2024-09-16)


### Features

* set publish config to public ([30e6684](https://github.com/audioling/open-subsonic-api-client/commit/30e6684c3d57d6ed3df22f9f108bba56aa211bee))

## [1.1.0](https://github.com/audioling/open-subsonic-api-client/compare/v1.0.0...v1.1.0) (2024-09-15)


### Features

* add initial routes ([d18440e](https://github.com/audioling/open-subsonic-api-client/commit/d18440e2ba97dd1f98c39f0e37babab83ed18126))

## 1.0.0 (2024-09-15)


### Features

* add initial routes ([d18440e](https://github.com/audioling/open-subsonic-api-client/commit/d18440e2ba97dd1f98c39f0e37babab83ed18126))
