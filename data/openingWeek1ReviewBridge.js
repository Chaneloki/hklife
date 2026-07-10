// data/openingWeek1ReviewBridge.js
// 明確嘅 choiceId -> review story branch 對照表，只適用於 Week 1（W1）。
//
// 點解需要呢個檔案：
// authored 事件檔（openingEventPool_w1_w6_v5_1.js）嘅 choice.memoryAdd 標籤，
// 同 authored review story 檔（reviewStories_w1_v0_3.js）嘅 branch.triggerStoryMemoryTags，
// 用嘅係兩套完全冇重疊嘅命名（例如 choice tag 係
// "w1_seat_neighbor_first_day_outgoingInvite_ask_queue_first"，
// review tag 係 "w1_seat_outgoing_ask_queue"）。同時 variantId 喺兩個檔案入面又用緊
// 唔同嘅字（例如 event 嘅 "gentleListener" vs review 嘅 "warm_listener"），冇辦法用 camelCase/snake_case
// 轉換或字首比對自動兜返埋一齊。
//
// 呢個檔案唔係新創作任何故事內容——每一組對應都係揾返兩個 authored 檔案入面「同一件事」
// 嘅選項文字同故事文字（例如 choice「先問家朗小息喺邊度排隊」對應 review branch
// 「ask_queue_together」，入面寫緊「你...小聲問：小息係咪要去排隊？」），純粹係內容整合，
// 唔係作者創作。少數選項（見下面 CONFIDENCE 標記 "weak"）冇一模一樣嘅對應，
// 用剩低嗰個做配對，屬於較低信心嘅連結，留咗喺呢度俾作者之後覆核／修正。
//
// schema: { [fullChoiceId]: { reviewGroupId, branchId, confidence: "strong" | "weak" } }

export const openingWeek1ReviewBridge = {
  // ---- w1_seat_neighbor_first_day / outgoingInvite ----
  w1_seat_neighbor_first_day_outgoingInvite_ask_queue_first: { reviewGroupId: "review_w1_seat_neighbor_outgoing_inviter", branchId: "ask_queue_together", confidence: "strong" },
  w1_seat_neighbor_first_day_outgoingInvite_ask_name_again: { reviewGroupId: "review_w1_seat_neighbor_outgoing_inviter", branchId: "introduce_self", confidence: "strong" },
  w1_seat_neighbor_first_day_outgoingInvite_smile_stay_seat: { reviewGroupId: "review_w1_seat_neighbor_outgoing_inviter", branchId: "quiet_smile", confidence: "strong" },
  w1_seat_neighbor_first_day_outgoingInvite_go_with_kalong_slowly: { reviewGroupId: "review_w1_seat_neighbor_outgoing_inviter", branchId: "observe_classroom", confidence: "weak" },

  // ---- w1_seat_neighbor_first_day / quietObserver ----
  w1_seat_neighbor_first_day_quietObserver_thank_for_space: { reviewGroupId: "review_w1_seat_neighbor_quiet_observer", branchId: "say_thanks_softly", confidence: "strong" },
  w1_seat_neighbor_first_day_quietObserver_arrange_books_quietly: { reviewGroupId: "review_w1_seat_neighbor_quiet_observer", branchId: "follow_book_suggestion", confidence: "strong" },
  w1_seat_neighbor_first_day_quietObserver_ask_if_blocking: { reviewGroupId: "review_w1_seat_neighbor_quiet_observer", branchId: "ask_if_familiar", confidence: "weak" },
  w1_seat_neighbor_first_day_quietObserver_whisper_name: { reviewGroupId: "review_w1_seat_neighbor_quiet_observer", branchId: "copy_silently", confidence: "weak" },

  // ---- w1_seat_neighbor_first_day / competitivePeer ----
  w1_seat_neighbor_first_day_competitivePeer_avoid_comparison: { reviewGroupId: "review_w1_seat_neighbor_competitive_peer", branchId: "avoid_comparison", confidence: "strong" },
  w1_seat_neighbor_first_day_competitivePeer_ask_name_writing_back: { reviewGroupId: "review_w1_seat_neighbor_competitive_peer", branchId: "ask_back", confidence: "strong" },
  w1_seat_neighbor_first_day_competitivePeer_say_still_learning: { reviewGroupId: "review_w1_seat_neighbor_competitive_peer", branchId: "admit_nervous", confidence: "strong" },
  w1_seat_neighbor_first_day_competitivePeer_answer_school_simple: { reviewGroupId: "review_w1_seat_neighbor_competitive_peer", branchId: "say_can_write_name", confidence: "weak" },

  // ---- w1_seat_neighbor_first_day / curiousTroublemaker ----
  w1_seat_neighbor_first_day_curiousTroublemaker_ask_secret_cabinet: { reviewGroupId: "review_w1_seat_neighbor_curious_troublemaker", branchId: "ask_secret", confidence: "strong" },
  w1_seat_neighbor_first_day_curiousTroublemaker_say_dont_scare_me: { reviewGroupId: "review_w1_seat_neighbor_curious_troublemaker", branchId: "say_afraid", confidence: "strong" },
  w1_seat_neighbor_first_day_curiousTroublemaker_observe_cabinet_later: { reviewGroupId: "review_w1_seat_neighbor_curious_troublemaker", branchId: "warn_not_touch", confidence: "strong" },
  w1_seat_neighbor_first_day_curiousTroublemaker_change_to_class_rule: { reviewGroupId: "review_w1_seat_neighbor_curious_troublemaker", branchId: "ignore_secret", confidence: "strong" },

  // ---- w1_teacher_first_roll_call / strictAcademic ----
  w1_teacher_first_roll_call_strictAcademic_clear_arrival: { reviewGroupId: "review_w1_teacher_roll_call_strict_academic", branchId: "clear_answer", confidence: "strong" },
  w1_teacher_first_roll_call_strictAcademic_small_but_try: { reviewGroupId: "review_w1_teacher_roll_call_strict_academic", branchId: "soft_answer", confidence: "strong" },
  w1_teacher_first_roll_call_strictAcademic_wait_eye_contact: { reviewGroupId: "review_w1_teacher_roll_call_strict_academic", branchId: "answer_after_eye_contact", confidence: "strong" },
  w1_teacher_first_roll_call_strictAcademic_miss_then_fix: { reviewGroupId: "review_w1_teacher_roll_call_strict_academic", branchId: "late_apology", confidence: "strong" },

  // ---- w1_teacher_first_roll_call / encouraging ----
  w1_teacher_first_roll_call_encouraging_normal_arrival: { reviewGroupId: "review_w1_teacher_roll_call_encouraging_mentor", branchId: "normal_answer", confidence: "strong" },
  w1_teacher_first_roll_call_encouraging_tiny_voice_nod: { reviewGroupId: "review_w1_teacher_roll_call_encouraging_mentor", branchId: "nod_then_soft_answer", confidence: "strong" },
  w1_teacher_first_roll_call_encouraging_ask_pronunciation: { reviewGroupId: "review_w1_teacher_roll_call_encouraging_mentor", branchId: "correct_name_pronunciation", confidence: "strong" },
  w1_teacher_first_roll_call_encouraging_smile_after_answer: { reviewGroupId: "review_w1_teacher_roll_call_encouraging_mentor", branchId: "smile_after_answer", confidence: "strong" },

  // ---- w1_teacher_first_roll_call / fairObserver ----
  w1_teacher_first_roll_call_fairObserver_answer_and_watch: { reviewGroupId: "review_w1_teacher_roll_call_fair_observer", branchId: "answer_and_watch_register", confidence: "strong" },
  w1_teacher_first_roll_call_fairObserver_quiet_answer_seen: { reviewGroupId: "review_w1_teacher_roll_call_fair_observer", branchId: "soft_but_eye_contact", confidence: "strong" },
  w1_teacher_first_roll_call_fairObserver_wait_turn_carefully: { reviewGroupId: "review_w1_teacher_roll_call_fair_observer", branchId: "wait_for_previous_voice", confidence: "strong" },
  w1_teacher_first_roll_call_fairObserver_forget_then_raise_hand: { reviewGroupId: "review_w1_teacher_roll_call_fair_observer", branchId: "raise_hand_after_delay", confidence: "strong" },

  // ---- w1_teacher_first_roll_call / caring ----
  w1_teacher_first_roll_call_caring_soft_arrival: { reviewGroupId: "review_w1_teacher_roll_call_pastoral_care", branchId: "soft_answer_with_eye", confidence: "strong" },
  w1_teacher_first_roll_call_caring_clear_arrival_relief: { reviewGroupId: "review_w1_teacher_roll_call_pastoral_care", branchId: "try_clear_voice", confidence: "strong" },
  w1_teacher_first_roll_call_caring_nod_if_nervous: { reviewGroupId: "review_w1_teacher_roll_call_pastoral_care", branchId: "nod_then_tiny_answer", confidence: "strong" },
  w1_teacher_first_roll_call_caring_tell_after_class: { reviewGroupId: "review_w1_teacher_roll_call_pastoral_care", branchId: "silent_now_talk_later", confidence: "strong" },

  // ---- w1_dismissal_line_confusion / seniorFriendly ----
  w1_senior_friendly_helped_with_handbook: { reviewGroupId: "review_w1_dismissal_friendly_senior", branchId: "show_handbook_to_senior", confidence: "strong" },
  w1_senior_friendly_taught_class_sign: { reviewGroupId: "review_w1_dismissal_friendly_senior", branchId: "ask_how_to_recognize_line", confidence: "strong" },
  w1_senior_friendly_confirmed_direction: { reviewGroupId: "review_w1_dismissal_friendly_senior", branchId: "walk_then_say_thanks", confidence: "strong" },
  w1_senior_friendly_followed_direction: { reviewGroupId: "review_w1_dismissal_friendly_senior", branchId: "point_class_badge_shyly", confidence: "strong" },
  w1_dismissal_line_confusion_seniorFriendly_let_senior_check_handbook: { reviewGroupId: "review_w1_dismissal_friendly_senior", branchId: "show_handbook_to_senior", confidence: "strong" },
  w1_dismissal_line_confusion_seniorFriendly_ask_how_to_find_next_time: { reviewGroupId: "review_w1_dismissal_friendly_senior", branchId: "ask_how_to_recognize_line", confidence: "strong" },
  w1_dismissal_line_confusion_seniorFriendly_thank_and_walk_self: { reviewGroupId: "review_w1_dismissal_friendly_senior", branchId: "walk_then_say_thanks", confidence: "strong" },
  w1_dismissal_line_confusion_seniorFriendly_too_shy_show_badge: { reviewGroupId: "review_w1_dismissal_friendly_senior", branchId: "point_class_badge_shyly", confidence: "strong" },

  // ---- w1_dismissal_line_confusion / seniorPrefectStrict ----
  w1_strict_prefect_stepped_aside: { reviewGroupId: "review_w1_dismissal_strict_prefect", branchId: "move_to_line_quickly", confidence: "strong" },
  w1_strict_prefect_asked_direction: { reviewGroupId: "review_w1_dismissal_strict_prefect", branchId: "ask_prefect_line", confidence: "strong" },
  w1_strict_prefect_check_handbook: { reviewGroupId: "review_w1_dismissal_strict_prefect", branchId: "avoid_prefect_find_teacher", confidence: "strong" },
  w1_strict_prefect_followed_classmate: { reviewGroupId: "review_w1_dismissal_strict_prefect", branchId: "follow_wrong_group", confidence: "strong" },
  w1_dismissal_line_confusion_seniorPrefectStrict_move_quickly_to_queue: { reviewGroupId: "review_w1_dismissal_strict_prefect", branchId: "move_to_line_quickly", confidence: "strong" },
  w1_dismissal_line_confusion_seniorPrefectStrict_ask_prefect_class_line: { reviewGroupId: "review_w1_dismissal_strict_prefect", branchId: "ask_prefect_line", confidence: "strong" },
  w1_dismissal_line_confusion_seniorPrefectStrict_look_for_teacher_instead: { reviewGroupId: "review_w1_dismissal_strict_prefect", branchId: "avoid_prefect_find_teacher", confidence: "strong" },
  w1_dismissal_line_confusion_seniorPrefectStrict_follow_wrong_peer: { reviewGroupId: "review_w1_dismissal_strict_prefect", branchId: "follow_wrong_group", confidence: "strong" },

  // ---- w1_family_asks_first_day / gentleListener ----
  w1_family_asks_first_day_gentleListener_talk_seat_classmate: { reviewGroupId: "review_w1_family_warm_listener", branchId: "share_seat_neighbor", confidence: "strong" },
  w1_family_asks_first_day_gentleListener_say_tired_first: { reviewGroupId: "review_w1_family_warm_listener", branchId: "say_tired_rest", confidence: "strong" },
  w1_family_asks_first_day_gentleListener_talk_roll_call_nervous: { reviewGroupId: "review_w1_family_warm_listener", branchId: "share_roll_call_nervous", confidence: "strong" },
  w1_family_asks_first_day_gentleListener_ask_tomorrow_morning: { reviewGroupId: "review_w1_family_warm_listener", branchId: "ask_wake_earlier", confidence: "strong" },

  // ---- w1_family_asks_first_day / cautiousPlanner ----
  w1_family_asks_first_day_cautiousPlanner_show_handbook_items: { reviewGroupId: "review_w1_family_careful_planner", branchId: "check_handbook_notice", confidence: "strong" },
  w1_family_asks_first_day_cautiousPlanner_ask_morning_schedule: { reviewGroupId: "review_w1_family_careful_planner", branchId: "ask_morning_plan", confidence: "strong" },
  w1_family_asks_first_day_cautiousPlanner_only_say_tired: { reviewGroupId: "review_w1_family_careful_planner", branchId: "too_tired_to_check", confidence: "strong" },
  w1_family_asks_first_day_cautiousPlanner_talk_teacher_rollcall: { reviewGroupId: "review_w1_family_careful_planner", branchId: "explain_teacher_rules", confidence: "strong" },

  // ---- w1_family_asks_first_day / faceExpectation ----
  w1_family_asks_first_day_faceExpectation_mention_not_only_praise: { reviewGroupId: "review_w1_family_face_saver", branchId: "say_no_praise_but_sat_well", confidence: "strong" },
  w1_family_asks_first_day_faceExpectation_talk_good_classmate: { reviewGroupId: "review_w1_family_face_saver", branchId: "talk_about_classmate_help", confidence: "strong" },
  w1_family_asks_first_day_faceExpectation_avoid_top_student_topic: { reviewGroupId: "review_w1_family_face_saver", branchId: "say_not_know_everyone_yet", confidence: "strong" },
  w1_family_asks_first_day_faceExpectation_ask_praise_meaning: { reviewGroupId: "review_w1_family_face_saver", branchId: "ask_must_be_praised", confidence: "strong" },

  // ---- w1_family_asks_first_day / relaxedSupport ----
  w1_family_asks_first_day_relaxedSupport_say_found_way_back: { reviewGroupId: "review_w1_family_loose_supporter", branchId: "talk_about_dismissal_route", confidence: "strong" },
  w1_family_asks_first_day_relaxedSupport_talk_funny_classmate: { reviewGroupId: "review_w1_family_loose_supporter", branchId: "share_small_funny_thing", confidence: "strong" },
  w1_family_asks_first_day_relaxedSupport_say_need_rest: { reviewGroupId: "review_w1_family_loose_supporter", branchId: "rest_now_talk_tomorrow", confidence: "strong" },
  w1_family_asks_first_day_relaxedSupport_ask_if_can_try_self: { reviewGroupId: "review_w1_family_loose_supporter", branchId: "try_pack_bag_self", confidence: "strong" }
};
