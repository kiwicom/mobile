package com.kiwi.rnandroidplayground

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    (application as PlaygroundApplication).startReactNative()

    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    button_hotels.setOnClickListener {
      startActivity(Intent(this, HotelsActivity.getViewModelClass()))
    }

    button_hotels_fragment.setOnClickListener {
      startActivity(Intent(this, HotelActivityFragment.getViewModelClass()))
    }
  }

  override fun onDestroy() {
    super.onDestroy()
    (application as PlaygroundApplication).clearReactNative()
  }
}
