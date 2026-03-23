def missed_dose_advice(delay_minutes):
    if delay_minutes <= 60:
        return "Take the dose now"
    elif delay_minutes <= 180:
        return "Take dose but adjust next timing"
    else:
        return "Skip this dose and continue next schedule"