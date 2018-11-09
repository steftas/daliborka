import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
	products = [
		{
			id: 0,
			name: 'Čaj Ljuvej Fohow',
			price: 50,
			description: 'Zeleni čaj  Puer je poznat u Kini još pre oko hiljadu godina, ali je danas stekao popularnost među drugim vrstama i sortama čaja. Zeleni čaj Puer je unikatan i jedinstven, jer ima jako antioksidantno delovanje i pozitivno deluje na detoksikaciju i jačanje imuniteta. Cena zelenog čaja Puer raste sa starošću i na čajnim aukcijama može dostići nekoliko hiljada dolara za kotur čaja. Zeleni Čaj Puer se koristi u celom svetu. Ima svoje potrošače i van Kine i Azije. Veliki broj ljudi iz Amerike i Evrope su ljubitelji čaja Puer. Čaj Puer pomaže organizmu u apsorbovanju hrane u želucu, poboljšava probavu i sprečava taloženje holesterola i triglicirida i stvaranje celulita u organizmu. Deluje preventivno kod oboljenja karcinoma. Redovno uzimanje zelenog čaja Ljuvej FOHOW pomaže kod regulisanja visokog i niskog pritiska, deluje na smanjenje holesterola u krvi, obnavlja životnu energiju -imunitet, efikasan je diuretik, ima pozitivno kozmetičko delovanje kao antioksidant. Uz pomoć zelenog čaja Puer može se lečiti alkoholizam i zavisnost od cigareta uz primenu kapsula Linčži i kalcijuma Haicao Gaj. ',
			imgUrl: '/assets/images/products/ljuvej.jpg'
		},
		{
			id: 1,
			name: 'Tablete Gaočen Fohow',
			price: 32,
			description: 'Brzo mršavljenje, detoksikacija želuca - tankog i debelog creva povećavanje libida kod muškaraca i žena. Hranljive tablete Gaočen Fohow su rezultat dugogodišnjih naučnih istraživanja tima stručnjaka Naučno Istraživačkog Centra za proizvodnju dodataka u  ishrani kompanije FOHOW iz Kine. Ovaj  preparat  je savršen čistač želudačno - crevnog trakta koji na principu detoksikacije tankog i debelog creva povoljno utiče na detoksikaciju organizma. U svom sastavu pored čistača sadrži i algu Spirulinu koja pothranjuje debelo crevo i koja povoljno deluje na očuvanje zdravlja i dugovečnost. Hranljive tablete Gaočen u svom sastavu sadrže: prah konžaka - 30%, hitozan - 20%, prah alge Spirulina 10%, visoko vlaknastu celulozu iz povrća i voća - 37% i biljne proteine - 3%. Biljka Konžak  je niskokalorični visoko vlaknasti  preparat u ishrani. To je biljka koja se koristi u farmaciji sa jedinstvenim svojstvima. Konžak je dobio prvobitno ime „Doktor čistač želudačno probavnog trakta“, „Božanstvena biljka dar sa neba“. Lekovito delovanje konžaka je da smanjuje masnoće, nivo šećera i holesterola u krvi, detoksikuje i izbacije toksine kod bolesti karcinoma, sprečava širenje bakterija, podstiče izlučivanje tečnosti i uklanja zastoj krvi kod loše cirkulacije. Pokazuje odlične rezultate kod gojaznih osoba, zatvora, kardiovaskularnih bolesti. Ima profilaktički efekat i pomoćno terapeutsko delovanje kod bolesti raka debelog creva, želuca i mozga. Hitozan je celuloza koja se dobija od ljuspica krabe. Hitozan blokira toksine ćelije raka. Poznato je da posle oboljenja od raka čovek brzo gubi na težini. To se dešava jer ćelije raka oslobađaju toksin koji smanjuje nivoa gvožđa u strukturi krvi i  dovodi do anemije. Dolazi do razlaganja lipida i čovek gubi apetit. Kada se uzima hitozan apetit se ponovo vraća. Hitozan se razlaže u crevima, organizam ga apsorbuje i omogućava blokiranje toksina raka. Regeneriše limfne ćelije koje su sposobne da uništavaju ćelije zahvaćene rakom. Limfne ćelije razlikuju normalne ćelije od ćelija zahvaćenih rakom i uništavaju ih. Međutim, obično oko ćelija zahvaćenih rakom kisela sredina ometa aktivnost limfnih ćelija. Uzimanjem hitozana koriguje se balans PH vrednosti i sprečava se širenje ćelija zahvaćenih rakom. Hitozan je sposoban da prijanja za ćelije zahvaćene rakom i blokira lepljenje ćelija raka uz zidove krvnih sudova. Hitozan aktivira ćelije imunog sistema, sprečava organizam da upija holesterol, smanjuje krvni pritisak, sprečava formiranje kancerogenih ćelija, neutrališe i izbacuje toksine iz organizma. Štiti jetru, povoljno deluje na smanjenje telesne težine, ubrzava proces zarastanja rana i opekotina. Visokovlaknasta celuloza - ekstrakt koji je dobijen iz zida biljnih ćelija predstavlja krupnomolekularnu celulozu, manje težine, ali većeg obima. U digestivnom traktu zauzima veliki prostor i stvara osećaj sitosti i na taj način deluje na gubljenje apetita. Efikasno deluje na izbacivanje toksina iz creva i na skidanje viška kilograma. Mnoge organizacije za ishranu u SAD i Evropi su hitozan, pored proteina, masti, šećera, vitamina i minerala, nazvali šestim elementom života koji je neophodan za ljudsko zdravlje. Spirulina je slatkovodna alga spiralnog oblika koja je neverovatna riznica hranljivih materija. Sadrži velike količine beta-karotina, gvožđa, hlorofila i vitamina B12. Ona je lekovita i odličan je dodatak ishrani, naročito za sportiste, rekonvalescente i starije osobe. Poboljšava metabolizam, jača imunitet, reguliše nivo holesterola, triglicerida i šećera u krvi. Predstavlja dobar izvor hranljivih vlakana, koja doprinose izbacivanju toksina i viška masti. Gvožđe koje sadrži spirulina 60% je bolje iskoristljivosti u organizmu u odnosu na druge farmaceutske preparate gvožđa. Osim toga, ona sadrži i vitamin E, cink i selen koji su značajni antioksidansi. Veoma je korisna za povećanje gvožđa u krvi i mogu je koristiti kako trudnice tako i deca. Pomaže kod regeneracije oštećenih ćelija koje nastaju posle zračenja,  ubrzavanje procesa  razmnožavanja ćelija koštane srži, što dovodi do povećanja imuniteta  kod koriščenja hemoterapija  i u postoperativnom periodu. Redovno konzumiranje spiruline održava zdrav nivo holesterola, povećava energiju, smanjuje krvni pritisak, povećava nivo antioksidanasa u krvi i poboljšava varenje. Služi kao prirodno sredstvo za čišćenje i detoksikaciju i regulaciju telesne težine. Koristi se i kod seksualne disfunkcije ( impotencije i frigidnosti ). Veoma je efikasna kod bolesti prostate. Biljni proteini - ekstakt dobijen od prirodnih biljnih komponenti. Veoma su bliski strukturi proteina koji se sintetišu u čovekovom organizmu. To je prirodni biljni protein koji ljudski organizam najlakše usvaja.',
			imgUrl: '/assets/images/products/gaocen.jpg'
		},
		{
			id: 2,
			name: 'Voćna pasta Ruža Fohow',
			price: 35,
			description: '',
			imgUrl: '/assets/images/products/ruza.jpg'
		},
		{
			id: 3,
			name: 'Eliksir Sancin FOHOW',
			price: 69,
			description: '',
			imgUrl: '/assets/images/products/sancin.jpg'
		},
		{
			id: 4,
			name: 'Kapsule Sjučinfu FOHOW',
			price: 30,
			description: '',
			imgUrl: '/assets/images/products/sjucinfu.jpg'
		},
		{
			id: 5,
			name: 'Eliksir Kordiceps FOHOW',
			price: 70,
			description: '',
			imgUrl: '/assets/images/products/kordiceps.jpg'
		}
	]

  	constructor() { }

  	ngOnInit() { }

}
