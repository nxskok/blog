treehuman.pdf: treehuman.tex
	pdflatex treehuman

show: treehuman.pdf
	evince treehuman.pdf&
