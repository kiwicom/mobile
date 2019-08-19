package com.kiwi.mobile.rnandroidplayground

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity;
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
      startActivity(Intent(this, HotelsActivityFragment.getViewModelClass()))
    }

    button_stay22_hotels.setOnClickListener {
      startActivity(Intent(this, HotelsStay22Activity.getViewModelClass()))
    }

    button_account_settings.setOnClickListener {
      startActivity(Intent(this, AccountSettingsActivity.getViewModelClass()))
    }
  }

  override fun onDestroy() {
    super.onDestroy()
    (application as PlaygroundApplication).clearReactNative()
  }
}
