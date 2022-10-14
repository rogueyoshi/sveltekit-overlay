<script>
	import { enhance } from '$app/forms';

	export let data = { count: 0 };
</script>

<p>Count is {data.count}</p>

<form method="post" action="?/increment" use:enhance>
	<button>Increment</button>
</form>
