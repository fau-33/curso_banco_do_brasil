# Desenvolvimento Mobile

<p>Em Kotlin, você pode criar variáveis usando as palavras-chave var e val. A palavra-chave var é usada para criar variáveis mutáveis, cujo valor pode ser alterado após sua criação. Por outro lado, a palavra-chave val é usada para criar variáveis imutáveis, também chamadas de constantes, cujo valor não pode ser alterado após sua atribuição inicial.</p>

<code>val|var nomeVariavel: TipoVariavel? = valorInicial</code>

<ul>
  <li>val ou var: As palavras-chave val e var são usadas para declarar variáveis imutáveis (constantes) e mutáveis, respectivamente.</li>
  <li>nomeVariavel: Nome que você deseja atribuir à variável. Os nomes de variáveis devem começar com uma letra minúscula e seguir as convenções de nomenclatura do camelCase.
</li>
  <li>TipoVariavel: O tipo de dado da variável, como Int, Double, String, etc. Em Kotlin, você pode omitir a declaração explícita do tipo se o compilador puder inferir o tipo da variável com base no valor inicial.
</li>
  <li>?: O símbolo de interrogação indica que a variável pode ser nula. Se você não incluir o ?, a variável não poderá conter um valor nulo.
</li>
  <li>=: Operador de atribuição usado para atribuir um valor à variável.</li>
  <li>valorInicial: O valor inicial atribuído à variável. Em alguns casos, você pode omitir a atribuição do valor inicial e atribuí-lo posteriormente no código.
</li>
</ul>

<p>var idade: Int = 25</p>
<p>idade = 26</p>
