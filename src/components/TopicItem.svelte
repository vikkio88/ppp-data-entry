<script lang="ts">
  import { authorLabelMap } from "../libs/author";
  import { topicTypeMap } from "../libs/topics";
  import type { BaseTopic, CollectionType, MainTopic } from "../libs/types";

  type Props = { topic: MainTopic | BaseTopic; type: CollectionType };

  const { topic, type }: Props = $props();
</script>

<li>
  <span>
    {topicTypeMap[type]}
  </span>

  <span>
    {authorLabelMap[topic.author]}
  </span>

  <span class="f1">
    {topic.description}
  </span>

  {#if "pizza" in topic}
    <span>
      (🍕 {topic.pizza?.slices}/10)
    </span>
  {/if}

  <button class="n-btn">❌</button>
</li>

<style>
  li {
    background-color: var(--main-bg-faint-color);
    padding: var(--pad);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 0 1rem;
  }

  .n-btn:hover {
    opacity: 0.7;
  }
</style>
