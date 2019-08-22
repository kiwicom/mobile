package com.kiwi.rnkiwimobile.account

import com.kiwi.rnkiwimobile.RNKiwiActivity

abstract class RNAccountSettingsActivity(initialProperties: RNAccountInitialProperties) : RNKiwiActivity(RNAccountModule.getInitialProperties(initialProperties)) {
    override fun getModuleName(): String {
        return "AccountSettings"
    }
}
