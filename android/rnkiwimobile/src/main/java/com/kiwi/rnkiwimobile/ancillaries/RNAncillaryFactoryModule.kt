package com.kiwi.rnkiwimobile.ancillaries

import android.os.Bundle

object RNAncillaryFactoryModule {
    const val jsEntryPoint = "app/native"
    const val moduleName = "AncillaryFactory"

    fun getInitialProperties(initialProperties: RNAncillaryFactoryInitialProperties): Bundle? {
        return Bundle().apply {
            putString("service", initialProperties.service)
            putInt("bookingId", initialProperties.bookingId)
            putString("kwAuthToken", initialProperties.kwAuthToken)
        }

    }

}
