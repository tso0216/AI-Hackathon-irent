// 示範車 RCQ-6760 的照片與疊圖對位框（refBox：疊圖中車身範圍；curBox：還車照片中車身範圍，皆為 0–1 比例）
window.ASSETS = {
  "angles": {
    "左前": {
      "borrow": "/static/img/lf_borrow.jpg",
      "ret": "/static/img/lf_return.jpg",
      "overlay": "/static/img/lf_overlay.png",
      "refBox": [
        0.07166666666666667,
        0.26,
        0.9566666666666667,
        0.785
      ],
      "curBox": [
        0.021666666666666667,
        0.18375,
        0.9583333333333334,
        0.71625
      ]
    },
    "右前": {
      "borrow": "/static/img/rf_borrow.jpg",
      "ret": "/static/img/rf_return.jpg",
      "overlay": "/static/img/rf_overlay.png",
      "refBox": [
        0.04,
        0.1825,
        0.8233333333333334,
        0.685
      ],
      "curBox": [
        0.0,
        0.10125,
        0.9983333333333333,
        0.735
      ]
    },
    "左後": {
      "borrow": "/static/img/lr_borrow.jpg",
      "ret": "/static/img/lr_return.jpg",
      "overlay": "/static/img/lr_overlay.png",
      "refBox": [
        0.06166666666666667,
        0.2225,
        0.9766666666666667,
        0.735
      ],
      "curBox": [
        0.12666666666666668,
        0.19875,
        0.9983333333333333,
        0.725
      ]
    },
    "右後": {
      "borrow": "/static/img/rr_borrow.jpg",
      "ret": "/static/img/rr_return.jpg",
      "overlay": "/static/img/rr_overlay.png",
      "refBox": [
        0.0,
        0.205,
        0.9983333333333333,
        0.85625
      ],
      "curBox": [
        0.0,
        0.14125,
        0.98,
        0.73125
      ]
    }
  },
  "extra": {
    "inFront": "/static/img/inFront.jpg",
    "inRear": "/static/img/inRear.jpg",
    "darkInterior": "/static/img/darkInterior.jpg",
    "wrongCar": "/static/img/wrongCar.jpg",
    "closeup": "/static/img/closeup.jpg"
  }
};
