def calculate_adherence(feedbacks):
    if not feedbacks:
        return 0

    total = len(feedbacks)
    on_time = sum(1 for f in feedbacks if f.taken_on_time == 1)
    avg_delay = sum(f.delay_minutes for f in feedbacks) / total

    score = (on_time / total) * 70  # 70% weight
    delay_penalty = min(avg_delay, 60) / 60 * 30  # 30% weight

    final_score = score + (30 - delay_penalty)

    return int(final_score)