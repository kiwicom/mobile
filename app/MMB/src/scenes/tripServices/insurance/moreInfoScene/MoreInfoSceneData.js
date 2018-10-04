// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

const styles = StyleSheet.create({
  icon: {
    color: defaultTokens.colorIconAttention,
    fontSize: 12,
  },
});

export default [
  {
    title: <Translation passThrough="" />,
    travelBasic: <Translation id="mmb.trip_services.insurance.variant.basic" />,
    travelPlus: <Translation id="mmb.trip_services.insurance.variant.plus" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.emergency_medical_expenses" />
    ),
    travelBasic: <Translation passThrough="60 000 €" />,
    travelPlus: <Translation passThrough="100 000 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.repatriation_medical_transportation" />
    ),
    travelBasic: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.real_cost_to_overall_limit" />
    ),
    travelPlus: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.real_cost_to_overall_limit" />
    ),
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.emergency_dental_treatment" />
    ),
    travelBasic: <Translation passThrough="200 €" />,
    travelPlus: <Translation passThrough="320 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.accidental_death" />
    ),
    travelBasic: <Translation passThrough="—" />,
    travelPlus: <Translation passThrough="7 000 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.permanent_consequences_of_accident" />
    ),
    travelBasic: <Translation passThrough="—" />,
    travelPlus: <Translation passThrough="14 000 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.liability_health" />
    ),
    travelBasic: <Translation passThrough="—" />,
    travelPlus: <Translation passThrough="30 000 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.liability_property" />
    ),
    travelBasic: <Translation passThrough="—" />,
    travelPlus: <Translation passThrough="15 000 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.co_insurance" />
    ),
    travelBasic: <Translation passThrough="—" />,
    travelPlus: <Translation passThrough="100 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.baggage_limit_total" />
    ),
    travelBasic: <Translation passThrough="—" />,
    travelPlus: <Translation passThrough="800 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.baggage_limit_item" />
    ),
    travelBasic: <Translation passThrough="—" />,
    travelPlus: <Translation passThrough="360 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.loss_travel_documents" />
    ),
    travelBasic: <Translation passThrough="200 €" />,
    travelPlus: <Translation passThrough="200 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.tourist_assistance" />
    ),
    travelBasic: <TextIcon style={styles.icon} code="V" />,
    travelPlus: <TextIcon style={styles.icon} code="V" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.medical_assistance" />
    ),
    travelBasic: <TextIcon style={styles.icon} code="V" />,
    travelPlus: <TextIcon style={styles.icon} code="V" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.telephone_assistance" />
    ),
    travelBasic: <TextIcon style={styles.icon} code="V" />,
    travelPlus: <TextIcon style={styles.icon} code="V" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.interpretation_and_translation" />
    ),
    travelBasic: <TextIcon style={styles.icon} code="V" />,
    travelPlus: <TextIcon style={styles.icon} code="V" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.delayed_baggage_coverage" />
    ),
    travelBasic: <Translation passThrough="—" />,
    travelPlus: <Translation passThrough="100 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.flight_delays_or_cancellations_coverage" />
    ),
    travelBasic: <Translation passThrough="—" />,
    travelPlus: <Translation passThrough="20 €/per hour, max. 100 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.missed_flight_coverage" />
    ),
    travelBasic: <Translation passThrough="—" />,
    travelPlus: <Translation passThrough="100 €" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.flight_cancellation" />
    ),
    travelBasic: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.to_amount_paid_for_flights_and" />
    ),
    travelPlus: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.to_amount_paid_for_flights_and" />
    ),
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.co_insurance_causes_flights_cancellation" />
    ),
    travelBasic: <Translation passThrough="10%" />,
    travelPlus: <Translation passThrough="10%" />,
  },
  {
    title: (
      <Translation id="mmb.trip_services.insurance.selection.more_info.co_insurance_causes_subsequent_services" />
    ),
    travelBasic: <Translation passThrough="20%" />,
    travelPlus: <Translation passThrough="20%" />,
  },
];
