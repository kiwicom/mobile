package com.kiwi.rnkiwimobile.account

import com.kiwi.rnkiwimobile.RNKiwiActivity

abstract class RNAccountPriceAlertsActivity(initialProperties: RNAccountInitialProperties) : RNKiwiActivity(RNAccountModule.getInitialProperties(initialProperties)) {
    override fun getModuleName(): String {
        return "AccountPriceAlerts"
    }
}
